import { createContext, useState, useEffect, ReactNode, useContext } from 'react'
import { api } from '../services/api'

const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData)

interface Transaction {
  id: string
  title: string
  amount: number
  type: string
  category: string
  createAt: string
}

interface TransactionProviderProps {
  children: ReactNode
}

interface TransactionContextData {
  transactions: Transaction[]
  createTransation: (transaction: TransactionInput) => Promise<void>
}

type TransactionInput = Omit<Transaction, 'id' | 'createAt'>

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransation(transitionInput: TransactionInput) {
    const response = await api.post('/transactions', { ...transitionInput, createAt: new Date() })
    const { transaction } = response.data

    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransation }}>
      {children}
    </TransactionsContext.Provider>
  )
}


export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}



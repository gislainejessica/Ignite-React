import styles from './styles.module.scss'
interface SubscribedButtonProps {
  priceId: string
}

export function SubscribedButton({ priceId }: SubscribedButtonProps) {

  return (
    <button type="button" className={styles.subscribedButton}>
      Subscribe now
    </button>
  )
}
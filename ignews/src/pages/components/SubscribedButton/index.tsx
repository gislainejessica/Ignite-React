import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'

export function SubscribedButton() {

  const isUserLoggedIn = true

  return (
    <button type="button" className={styles.subscribedButton}>
      Subscribe now
    </button>
  )
}
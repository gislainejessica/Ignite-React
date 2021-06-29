import { RepositoryItem } from "./RepositoryItem"

const repository = {
  name: "Blog ChaComigo",
  description: 'Blog in React',
  link: "https://github.com/gislainejessica/blog-chacomigo"
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1> Lista de repositórios </h1>

      <ul>

        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />

        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />

      </ul>
    </section>
  )
}
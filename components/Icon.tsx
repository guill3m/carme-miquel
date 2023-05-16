export default function Icon({
  name,
}: {
  name: 'articles' | 'autora' | 'entrevistes' | 'llibres' | 'videos'
}) {
  return (
    <svg viewBox="0 0 600 600">
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  )
}

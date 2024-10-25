interface HeadingH1Props {
  children: React.ReactNode
}

export function HeadingH1({ children }: HeadingH1Props) {
  return <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">{children}</h1>
}

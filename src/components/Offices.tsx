import clsx from 'clsx'

function Office({
  name,
  children,
  invert = true,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-300',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950' }>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = true,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Miami" invert={invert}>
          350 Lincoln Rd Suite 340
          <br />
          Miami Beach, FL 33139
        </Office>
      </li>
      
    </ul>
  )
}

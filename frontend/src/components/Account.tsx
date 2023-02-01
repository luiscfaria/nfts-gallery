import { useAccount, useEnsName } from 'wagmi'

export function Account() {
  const { address } = useAccount()
  const { data: ensName } = useEnsName({ address })

  return (
    <div style={{color: 'white'}}>
      {ensName ?? address}
      {ensName ? ` (${address})` : null}
    </div>
  )
}

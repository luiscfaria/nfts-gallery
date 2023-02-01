import { useAccount, useConnect, useDisconnect } from "wagmi";
import { Button } from "@chakra-ui/react";

export function Connect() {
  const { connector, isConnected } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div className="connection">
      <div className="connection-options">
        {isConnected && (
          <Button colorScheme="purple" onClick={() => disconnect()} mb={2}>
            Disconnect from {connector?.name}
          </Button>
        )}

        {connectors
          .filter((x) => x.ready && x.id !== connector?.id)
          .map((x) => (
            <Button
              key={x.id}
              colorScheme="purple"
              onClick={() => connect({ connector: x })}
              mb={2}
            >
              {x.name}
              {isLoading && x.id === pendingConnector?.id && " (connecting)"}
            </Button>
          ))}
          {error && <div style={{color: 'white'}}>{error.message}</div>}
      </div>

    </div>
  );
}

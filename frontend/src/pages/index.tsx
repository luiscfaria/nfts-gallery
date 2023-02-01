import { useAccount } from "wagmi";
import { Connect } from "../components";
import Gallery from "../components/Gallery";

function Page() {
  const { isConnected } = useAccount();

  return (
    <>
      <div className="main">
        <Connect />

        {isConnected && (
          <>
            <Gallery />
          </>
        )}
      </div>
    </>
  );
}

export default Page;

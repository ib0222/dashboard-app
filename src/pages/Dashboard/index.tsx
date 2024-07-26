import { useEffect, useState } from "react";
import Layout from "../Layout";

const Loading = () => <div>loading...</div>;

function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    console.log("finished");
  }, [isLoading]);

  return (
    <Layout>
      <div className="card m-3" style={{ width: "18rem" }}>
        <div className="card-header">Card Header</div>
        <div className="card-body">
          {isLoading ? (
            <Loading />
          ) : (
            <p>This is some text within a card body.</p>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;

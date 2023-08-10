import { ClientComponent } from "../components/ClientComponent";

const fetchFromServer = async () => {
  const res = await fetch("https://host.docker.internal:1443");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.text();
  return data;
};

export default async function Home() {
  const data = await fetchFromServer();

  return (
    <main className="flex items-center justify-center">
      <div>
      <p>From Server: {data}</p>
      <ClientComponent />
      </div>
    </main>
  );
}

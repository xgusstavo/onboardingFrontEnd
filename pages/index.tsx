import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/admin/students">
        <a>Students</a>
      </Link>
    </div>
  );
};

export default Home;

import Link from "next/link";
import { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import Quizselection from "../components/Quizselection/";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(sessionStorage["user"]);
  }, []);
  return (
    <>
      <nav className="flex justify-end">
        {user ? (
          <Dropdown
            buttonText={`Hi ${user}`}
            options={[
              { id: 1, text: "Dashboard", url: "/dashboard" },
              { id: 2, text: "Log out", url: "/logout" },
            ]}
          />
        ) : (
          <>
            <Link
              href="/auth/login"
              className="px-4 py-2 mr-4 font-bold text-blue-500 hover:text-blue-800"
            >
              Login
            </Link>
            <Link
              href="/auth/signup"
              className="px-4 py-2 font-bold text-blue-500 hover:text-blue-800"
            >
              Sign Up
            </Link>
          </>
        )}
      </nav>

      <Quizselection />
    </>
  );
}

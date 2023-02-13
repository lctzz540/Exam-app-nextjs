import React from "react";
import { useRouter } from "next/router";

function PermissionDenied() {
  const router = useRouter();

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1>Permission Denied</h1>
        <p>You do not have permission to access this page.</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default PermissionDenied;

import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css";
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <main>
          <Header />
    
          <div className="flex flex-col items-center justify-center gap-4 bg-[#e0ae6e] bg-[url('/imagination.jpg')] bg-cover bg-center bg-blend-screen text-black py-6 px-6 mb-16">
            <article>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="128"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-message-circle-question text-center m-auto"
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <h2 className="text-4xl font-black max-w-3xl text-center pb-4">
                What if a cryptowallet was both secure and simple?
              </h2>
              <p className="text-2xl max-w-3xl pb-4">
                Imagine a uniquely African digital wallet made for security, web3
                and privacy. Imagine a simple unified application for buying,
                selling, trading and even staking cryptocurrency that works
                regardless of platform or device
              </p>
              <p className="text-2xl max-w-3xl">
                We are Imali Digital Wallet. Stop imagining, start transacting!
              </p>
            </article>
            <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-12">
              <figure className="card bg-[#ffffffaa] w-96 shadow-lg px-4 py-4 text-center flex flex-col items-center justify-center gap-4 border">
                <img
                  src="/logo.svg"
                  alt="Imali Digital Wallet"
                  height="256"
                  width="256"
                />
                <h1 className="text-4xl font-black text-center uppercase">
                  Imali Digital Wallet
                </h1>
                <p> A non-custodial secure cryptowallet done the African way</p>
                <button className="btn">Learn More</button>
              </figure>
              <div className="py-4">
                <h2 className="text-2xl uppercase font-black pb-6">Signup</h2>
                <p className="text-xl">
                  Signing up for Imali is easy and only takes a few seconds.
                </p>
                <form className="flex flex-col gap-4 mt-4">
                  <label>Email:</label>
                  <input className="border bg-[#ffffffaa] px-2 py-2 rounded shadow-sm" />
                  <label>Phone Number:</label>
                  <input className="border bg-[#ffffffaa] px-2 py-2 rounded shadow-sm" />
                  <label>Username:</label>
                  <input className="border bg-[#ffffffaa] px-2 py-2 rounded shadow-sm" />
                  <label>Password</label>
                  <input className="border bg-[#ffffffaa] px-2 py-2 rounded shadow-sm" />
                  <label>Confirm Password</label>
                  <input className="border bg-[#ffffffaa] px-2 py-2 rounded shadow-sm" />
                  <button className="btn btn-primary w-24 py-2 shadow-md">Signup</button>
                </form>
              </div>
            </div>
            <Footer />
          </div>
        </main>
  )
}
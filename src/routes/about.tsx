import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <main>
      <Header />
      <div className="flex flex-col items-center justify-center gap-4 bg-[#e0ae6e] text-black py-6 px-6 mb-16">
      <Breadcrumbs />
        <article>
        <h1 className="text-4xl font-black text-center uppercase  pb-4">
            About Imali Digital Wallet
        </h1>
         <p className="text-2xl max-w-3xl pb-4">
            Imali Digital Wallet is a secure, non-custodial digital wallet closely tied to
            Coin Afriq. You can buy, sell, trade and stake with our app that's
            easy to use, but very powerful and secure. 
        </p>
        <p className="text-2xl max-w-3xl pb-4">
            Imali Digital Wallet can be used to buy and sell Coin Afriq,
            as well trade Coin Afriq for other cryptocurrenies.
            For more advanced users who wish to volunteer as validators
            for Coin Afriq can use our wallet to stake their cryptocoins
            to validate transactions for a share of rewards for succesful
            validation.
        </p>
        <p className="text-2xl max-w-3xl pb-4">
            We are fully licensed by the FCSA in South Africa to trade 
            in cryptocurrency, as well having partnered Plaid, an
            international company with a great reputation for
            KYC and AML verification of our users.
        </p>
        <p className="text-xl max-w-3xl pb-4 text-center">
            Coin Afriq (Pty) LTD
        </p>
        <p className="text-xl max-w-3xl pb-4 text-center">
            Company Number: K2025/149563/07
        </p>
        
        </article>
      </div>
      <Footer />
    </main>
  );
}

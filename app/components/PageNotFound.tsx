import { HomeButton } from "../components/Button";



export const PageNotFound = () => {
    return (
        <main>
        <a href="https://wallet-detective.netlify.app">
        <h1 className="text-grey-darkest pt-4 pl-4">
       Wallets Detective &#128021;
     </h1>
        </a>
       <div className="card">
         <h1 className="mb-8 text-xl font-bold">
           404: No tokens found but you have found Ulalume:
         </h1>
         <div className="mb-8 text-xl font-bold">
           <p>And I said: "What is written, sweet sister, On the door of this</p>
           <p>legended tomb?" She replied: "Ulalume -Ulalume— 'Tis the vault of </p>
           <p>thy lost Ulalume!"{" "} </p>
         </div>
         <HomeButton url="https://wallet-detective.netlify.app" />
       </div>
     </main>
   );
}
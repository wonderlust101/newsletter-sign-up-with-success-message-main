import {BrowserRouter, Routes, Route} from "react-router-dom";
import NewsletterSignup from "./pages/NewsletterSignup";

const basename = import.meta.env.BASE_URL;

export default function App() {

  return (
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<NewsletterSignup/>}/>
        </Routes>
      </BrowserRouter>
  )
}

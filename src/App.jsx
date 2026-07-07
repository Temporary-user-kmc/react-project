import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Home = () => {
  return <h2>ホームページ</h2>;
}

const Profile = () => {
  return <h2>プロフィールです</h2>;
}

const Contact = () => {
  return <h2>連絡はこちらから</h2>;
}

const NotFound = () => {
  return <h2>ページがありません！</h2>;
}

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">ホーム</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/Contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
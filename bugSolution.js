```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:userId" element={<UserPage />} />
        {/* ... other routes */}
      </Routes>
    </BrowserRouter>
  );
}

function UserPage() {
  const { userId } = useParams();
  return (
    <div>
      <h1>User Page</h1>
      <UserDetail userId={userId} />
    </div>
  );
}

function UserDetail({ userId }) {
  return (
    <div>
      <h2>User Detail: {userId}</h2>
    </div>
  );
}
```
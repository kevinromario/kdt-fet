export const metadata = {
  title: 'Login - ERP Solution',
  description: 'Masuk ke akun ERP Anda untuk mulai mengelola bisnis.',
};

export default function LoginPage() {
  return (
    <main className="login">
      <h1>Login</h1>
      <div className="login-container">
        <div className="login-box">
          <form className="login-form">
            <div className="login-field">
              <label htmlFor="email" className="login-label">
                Email
              </label>
              <input className="input-form" type="email" id="email" />
            </div>
            <div className="login-field">
              <label htmlFor="password" className="login-label">
                Password
              </label>
              <input className="input-form" type="password" id="password" />
            </div>
            <button className="button-login" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

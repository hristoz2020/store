
const Login = () => {

    function onSubmit(e) {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');
    }

    return (
        <form className="login-form" onSubmit={onSubmit} method="POST">
            <label htmlFor="email">
                <input type="text" name="email" id="email" placeholder="Name..." />
            </label>
            <label>
                <input type="password" name="password" id="password" placeholder="Password..." />
            </label>
            <button>Login</button>
        </form>
    );
}

export default Login;
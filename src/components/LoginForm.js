import './LoginForm.css'

function LoginForm(){
    return (
        <form>
            <h2>Login Form</h2>
            <input type='text' placeholder="Surname"/>
            <input type='text' placeholder="Name"/>
            <input type='text' placeholder="Email"/>
            <input type='password' placeholder="Password"/>
            <button type="submit">Send</button>
        </form>
    )
}

export default LoginForm
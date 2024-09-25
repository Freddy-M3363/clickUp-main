import { useForm } from '@inertiajs/react';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <form onSubmit={submit}>
            <h1>Login</h1>

            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                />
                {errors.email && <span>{errors.email}</span>}
            </div>

            <div>
                <label>Password</label>
                <input
                    type="password"
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
                />
                {errors.password && <span>{errors.password}</span>}
            </div>

            <button type="submit" disabled={processing}>
                Log in
            </button>
        </form>
    );
}

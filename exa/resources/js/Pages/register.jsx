import { useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <form onSubmit={submit}>
            <h1>Register</h1>

            <div>
                <label>Name</label>
                <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                />
                {errors.name && <span>{errors.name}</span>}
            </div>

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

            <div>
                <label>Confirm Password</label>
                <input
                    type="password"
                    value={data.password_confirmation}
                    onChange={(e) => setData('password_confirmation', e.target.value)}
                />
            </div>

            <button type="submit" disabled={processing}>
                Register
            </button>
        </form>
    );
}

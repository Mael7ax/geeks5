import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const RegistrationForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log('Данные пользователя:', data);
        toast.success('Регистрация успешна!');
        reset();
    };

    const password = watch('password');

    return (
        <div style={{ maxWidth: 400, margin: '0 auto' }}>
            <h2>Регистрация</h2>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div>
                    <label>Имя:</label>
                    <input
                        type="text"
                        {...register('name', { required: 'Имя обязательно' })}
                    />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        {...register('email', {
                            required: 'Email обязателен',
                            validate: (value) => {
                                const emailRegex = /^[^\s@]{2,}@[^\s@]+\.[^\s@]+$/;
                                return emailRegex.test(value) || 'Email должен быть валидным';
                            },
                        })}
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                </div>

                <div>
                    <label>Пароль:</label>
                    <input
                        type="password"
                        {...register('password', {
                            required: 'Пароль обязателен',
                            minLength: {
                                value: 6,
                                message: 'Пароль должен быть не менее 6 символов',
                            },
                        })}
                    />
                    {errors.password && (
                        <p style={{ color: 'red' }}>{errors.password.message}</p>
                    )}
                </div>

                <div>
                    <label>Подтверждение пароля:</label>
                    <input
                        type="password"
                        {...register('confirmPassword', {
                            required: 'Подтверждение пароля обязательно',
                            validate: (value) =>
                                value === password || 'Пароли должны совпадать',
                        })}
                    />
                    {errors.confirmPassword && (
                        <p style={{ color: 'red' }}>{errors.confirmPassword.message}</p>
                    )}
                </div>

                <button type="submit" style={{ marginTop: '10px' }}>
                    Зарегистрироваться
                </button>
            </form>

            <ToastContainer />
        </div>
    );
};


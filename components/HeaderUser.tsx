'use client';
import { useState } from 'react';
import { CustomButton } from '.';

const HeaderUser = ({ user }) => {
    const [session, setSession] = useState(false);
    function handleSession() {
        setSession(!session);
    }

    return (
        <div className="flex gap-2">
            <CustomButton
                title={session ? 'Logout' : 'Login'}
                containerStyles="text-white xl:text-primary-blue  rounded-full bg-primary-blue xl:bg-white min-w-[5rem] md:min-w-[8.125rem] shadow-md"
                handleClick={handleSession}
            />
            {session && (
                <div className="flex items-center">
                    <img
                        src={user.avatar}
                        alt="User Avatar"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                </div>
            )}
        </div>
    );
};

export default HeaderUser;

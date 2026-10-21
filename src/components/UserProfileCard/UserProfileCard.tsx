import type { UserProfileCardProps } from "../../types";

export default function UserProfileCard({user, showEmail, showRole, onEdit, children}: UserProfileCardProps) {
    return (
        <div className="rounded-lg bg-white p-6 shadow">
            <div className="flex items-center">
                <div className="h-14 w-14 overflow-hidden rounded-full">
                    {user.avatarUrl && (
                        <img className="h-full w-full object-cover" src={user.avatarUrl} alt="user profile image" />
                    )}
                </div>
                <div className="flex-1 space-y-2 text-center">
                    <h2 className="font-semibold text-gray-900">{user.name}</h2>
                    {showEmail && (
                        <span className="text-sm text-gray-700 block">{user.email}</span>
                    )}
                    {showRole && (
                        <span className="text-sm text-gray-500 block">{user.role}</span>
                    )}
                </div>
            </div>
            <button 
                className="w-full rounded bg-[#1a5cff] py-2.5 text-center text-white hover:bg-[#1448cc]"
                onClick={onEdit ? () => onEdit(user.id) : undefined}
            >
                Edit Profile
            </button>
        </div>
    )
}
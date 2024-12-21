import React, { createContext, useState, useContext } from 'react';
import Notification from '../utilities/notification';

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    const removeNotification = (id) => {
        setNotifications(prev => prev.filter(notification => notification.id !== id));
    }

    const addNotification = (message) => {
        const id = Date.now();
        setNotifications([...notifications, { id, message }]);
        setTimeout(() => removeNotification(id), 4000);
    }

    return (
        <NotificationContext.Provider value={{ addNotification }}>
            {children}
            <div className="w-auto h-full space-y-2">
                {notifications.map((notification) => (
                    <Notification
                        key={notification.id}
                        message={notification.message}
                    />
                ))}
            </div>
        </NotificationContext.Provider>
    )
}
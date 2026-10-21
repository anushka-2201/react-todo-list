import React from 'react';

export const About = () => {
    return (
        <div className="container my-5">
            <div className="card shadow-sm p-4" style={{ borderRadius: "15px", border: "none" }}>
                <h2 className="text-center mb-4" style={{ color: "#2c3e50" }}>About TO-DO LIST</h2>
                <p className="text-muted" style={{ fontSize: "1.1rem", lineHeight: "1.8", textAlign: "justify" }}>
                    Welcome to Todo List! This is a simple, fast, and easy-to-use application that helps you organize your daily tasks. Add your important tasks, track them, and delete them once completed. The easiest way to boost your productivity!
                </p>
            </div>
        </div>
    );
};
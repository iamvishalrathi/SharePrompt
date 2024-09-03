import "@styles/globals.css";

export const metadata = {
    title: "Share-Prompt",
    description: "Discover & Share AI Prompts",
    icons: {
        icon: '/assets/images/share-prompt.png'
    }
};

const RootLayout = ({ children }) => (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient' />
            </div>

            <main className='app'>
                {children}
            </main>
        </body>
    </html>
);

export default RootLayout;
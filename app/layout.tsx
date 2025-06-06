import { Metadata } from "next"
import './ui/globals.css';

// export const metadata = {
//   title: "NextJS Interview Practice",
//   descrition: "Yes yes"
// }

export const metadata: Metadata = {
  title: {
    default: "Home - NextJS Interview Practice",
    template: "%s - NextJS Interview Practice"
  },
  description: ""
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  );
}
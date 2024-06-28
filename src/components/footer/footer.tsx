export default function Footer() {
    return (
      <footer className="flex flex-col items-center justify-center py-8">
        <p className="text-center text-secondary">
          © {new Date().getFullYear()} Qhun&apos; Blog. All rights reserved.
        </p>
      </footer>
    );
  }
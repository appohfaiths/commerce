'use client';

export default function FooterCopyright({ copyrightName }: { copyrightName: string }) {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : "");

  return (
    <p>
      &copy; {copyrightDate} {copyrightName}
      {copyrightName.length && !copyrightName.endsWith(".") ? "." : ""} All rights reserved.
    </p>
  );
}

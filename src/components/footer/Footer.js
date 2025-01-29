function Footer() {
  return (
    <div className="flex flex-col p-0 md:p-4 lg:p-4  md:flex-row items-center justify-center">
      <p className="text-sm">
        © Developer Portfolio by{"  "}
        <a
          href="https://linkedin.com/in/emeline-d-6915a417a"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ec704c] hover:text-[#42bcbc] dark:text-[#42bcbc] dark:hover:text-[#ec704c] lg:text-[#ec704c] lg:hover:text-[#42bcbc]"
        >
          Emeline Delobel - 2025
        </a>
      </p>
    </div>
  );
}

export default Footer;

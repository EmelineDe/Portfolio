function Footer() {
  return (
    <div className="flex flex-col p-0 md:p-4 lg:p-4  md:flex-row items-center justify-center">
      <p className="text-sm">
        © Developer Portfolio by{" "}
        <a
          href="https://linkedin.com/in/emeline-d-6915a417a"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ec704c] hover:text-[#ec704c] lg:text-[#42bcbc] lg:hover:text-[#ec704c]"
        >
          Emeline Delobel - 2024
        </a>
      </p>
    </div>
  );
}

export default Footer;

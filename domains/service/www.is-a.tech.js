addSubDomain({
  description: "www subdomain",
  domain: "is-a.tech",
  subdomain: "www",
  owner: {
    repo: "https://github.com/gantit/free-domains",
  },
  record: {
    A: ["192.0.2.1"],
    AAAA: ["100::"],
  },
});

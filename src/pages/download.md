# Apache GraphAr(incubating) Downloads

The official Apache GraphAr (incubating) releases are provided as source artifacts.

## Releases

The latest source release is 0.13.0:

| Version | Date | Source | Release Notes |
|---------|------------|--------|---------------|
| 0.13.0  |2025-08-29  | [apache-graphar-0.13.0-incubating-src.tar.gz](https://www.apache.org/dyn/closer.lua/incubator/graphar/0.13.0/apache-graphar-0.13.0-incubating-src.tar.gz?action=download) ([asc](https://downloads.apache.org/incubator/graphar/0.13.0/apache-graphar-0.13.0-incubating-src.tar.gz.asc), [sha512](https://downloads.apache.org/incubator/graphar/0.13.0/apache-graphar-0.13.0-incubating-src.tar.gz.sha512)) | [release notes](https://github.com/apache/incubator-graphar/releases/tag/v0.13.0) |
| 0.12.0  |2024-07-02  | [apache-graphar-0.12.0-incubating-src.tar.gz](https://www.apache.org/dyn/closer.lua/incubator/graphar/0.12.0/apache-graphar-0.12.0-incubating-src.tar.gz?action=download) ([asc](https://downloads.apache.org/incubator/graphar/0.12.0/apache-graphar-0.12.0-incubating-src.tar.gz.asc), [sha512](https://downloads.apache.org/incubator/graphar/0.12.0/apache-graphar-0.12.0-incubating-src.tar.gz.sha512)) | [release notes](https://github.com/apache/incubator-graphar/releases/tag/v0.12.0) |

## All archived releases

For older releases, please check the [archive](https://archive.apache.org/dist/incubator/graphar/).

## Notes

* When downloading a release, please verify the OpenPGP compatible signature (or failing that, check the SHA-512); these should be fetched from the main Apache site.
* The KEYS file contains the public keys used for signing release. It is recommended that (when possible) a web of trust is used to confirm the identity of these keys.
* Please download the [KEYS](https://downloads.apache.org/incubator/graphar/KEYS) as well as the .asc signature files.

### To verify the signature of the release artifact

You will need to download both the release artifact and the .asc signature file for that artifact. Then verify the signature by:

* Download the KEYS file and the .asc signature files for the relevant release artifacts.
* Import the KEYS file to your GPG keyring: 

    ```shell
    gpg --import KEYS
    ```

* Verify the signature of the release artifact using the following command:
  
    ```shell
    gpg --verify <artifact>.asc <artifact>
    ```

### To verify the checksum of the release artifact

You will need to download both the release artifact and the .sha512 checksum file for that artifact. Then verify the checksum by:

```shell
shasum -a 512 -c <artifact>.sha512
```
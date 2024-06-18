---
title: Verify a candidate version
sidebar_position: 1
---

## Introduction
For detailed check list, please refer to the official [check list](https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist)

Version content accessible in browser https://dist.apache.org/repos/dist/dev/incubator/graphar/

## Download the candidate version

Download the candidate version to be released to the local environment Need to rely on gpg tool, if not, it is recommended to install `gpg2`.

:::caution

If the network is poor, downloading may be time-consuming. The download is completed normally in about 20 minutes, please wait patiently.

:::

```shell
#If there is svn locally, you can clone to the local
$ svn co https://dist.apache.org/repos/dist/dev/incubator/graphar/${release_version}/
#or download the material file directly
$ wget https://dist.apache.org/repos/dist/dev/incubator/graphar/${release_version}/xxx.xxx
```

## Verify that the uploaded version is compliant

Start the verification process, which includes but is not limited to the following content and forms.

### Check whether the release package is complete

The package uploaded to dist must include the source code package, and the binary package is optional.

1. Whether to include the source code package
2. Whether to include the signature of the source code package
3. Whether to include the sha512 of the source code package
4. If the binary package is uploaded, also check the contents listed in (1)-(3)


### Check gpg signature

First import the publisher's public key. Import KEYS from the svn repository to the local environment. (The person who releases the version does not need to import it again, the person who helps to do the verification needs to import it, and the user name is enough for the person who issued the version)

#### Import public key

```shell
$ curl  https://downloads.apache.org/incubator/graphar/KEYS > KEYS # Download KEYS
$ gpg --import KEYS # Import KEYS to local
```
#### Trust the public key

Trust the KEY used in this version:

```shell
$ gpg --edit-key xxxxxxxxxx #KEY user used in this version
gpg (GnuPG) 2.2.21; Copyright (C) 2020 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Secret key is available.
gpg> trust #trust
Please decide how far you trust this user to correctly verify other users' keys
(by looking at passports, checking fingerprints from different sources, etc.)

  1 = I don't know or won't say
  2 = I do NOT trust
  3 = I trust marginally
  4 = I trust fully
  5 = I trust ultimately
  m = back to the main menu

Your decision? 5 #choose 5
Do you really want to set this key to ultimate trust? (y/N) y  #choose y
                                                            
gpg>
         
```

#### Check the gpg signature

```shell
$ for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i; done
```

check result

> If something like the following appears, it means the signature is correct. Keyword: **`Good signature`**

```shell
apache-graphar-xxx-incubating-src.tar.gz
gpg: Signature made XXXX
gpg: using RSA key XXXXX
gpg: Good signature from "xxx @apache.org>"
```

### Check sha512 hash

```shell
$ for i in *.tar.gz; do echo $i; sha512sum --check  $i.sha512; done
```

### Check the source package

unzip  `apache-graphar-${release.version}-incubating-src.tar.gz`

```shell
tar -xzvf apache-graphar-${release.version}-incubating-src.tar.gz
```

check as follows:

- [ ] Check whether the source package contains unnecessary files, which makes the tar package too large
- [ ] Folder contains the word `incubating`
- [ ] There are `LICENSE` and `NOTICE` files
- [ ] There is a `DISCLAIMER` or `DISCLAIMER-WIP` file
- [ ] The year in the `NOTICE` file is correct
- [ ] Only text files exist, not binary files
- [ ] All files have ASF license at the beginning
- [ ] Able to compile correctly
- [ ] .....

You can refer to this article: [ASF Third Party License Policy](https://apache.org/legal/resolved.html)

compile the source code: [How to build GraphAr](https://graphar.apache.org/community/development)


## 3. Email reply

If you initiate a posting vote, you can refer to this response example to reply to the email after verification
<font color="red">
When replying to the email, you must bring the information that you have checked by yourself. Simply replying to `+1 approve` is invalid.

When PPMC votes in the dev@graphar.apache.org GraphAr community, Please bring the binding suffix to indicate that it has a binding vote for the vote in the GraphAr community, and it is convenient to count the voting results.

When IPMC votes in the general@incubator.apache.org incubator community. Please bring the binding suffix to indicate that the voting in the incubator community has a binding vote, which is convenient for counting the voting results.
</font>

:::caution
If you have already voted on dev@graphar.apache.org, you can take it directly to the incubator community when you reply to the vote, such as:

```html
//Incubator community voting, only IPMC members have binding binding，PPMC needs to be aware of binding changes
Forward my +1 from dev@listgrapharnkis (non-binding)
Copy my +1 from graphar DEV ML (non-binding)
````
:::


Non-PPMC/Non-IPMC member:

```text
+1 (non-binding)
I checked:
     1. All download links are valid
     2. Checksum and signature are OK
     3. LICENSE and NOTICE are exist
     4. Build successfully on macOS(Big Sur)
     5. 
````

PPMC/IPMC member:

```text
//Incubator community voting, only IPMC members have binding binding
+1 (binding)
I checked:
     1. All download links are valid
     2. Checksum and signature are OK
     3. LICENSE and NOTICE are exist
     4. Build successfully on macOS(Big Sur)
     5. 
````



--- 

This doc refer from [Apache StreamPark](https://streampark.apache.org/)
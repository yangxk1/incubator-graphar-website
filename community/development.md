---
title: Development
sidebar_position: 2
id: development
---

# How to build GraphAr

Please checkout the source tree from https://github.com/apache/incubator-graphar.

## Build GraphAr C++ library

### System setup

Building GraphAr C++ library requires:

- A C++17-enabled compiler. On Linux, gcc 7.1 and higher should be
  sufficient. For MacOS, at least clang 5 is required
- CMake 3.5 or higher
- On Linux and macOS, ``make`` build utilities
- Apache Arrow C++ (>= 12.0.0, requires `arrow-dev`, `arrow-dataset`, `arrow-acero` and `parquet` modules) for Arrow filesystem support. You can refer to [Apache Arrow Installation](https://arrow.apache.org/install/) to install the required modules.
- [Catch2 v3](https://github.com/catchorg/Catch2) for unit testing if `BUILD_TESTS` is enabled
- [Google Benchmark](https://github.com/google/benchmark) (>= 1.6.0) for benchmarking if `BUILD_BENCHMARKS` is enabled

### Building

```bash
$ cd cpp
$ cmake -S . -B build
$ cmake --build build
```

## Build GraphAr Scala with Spark library

### System setup

Building requires:

- JDK 8 or JDK 11
- Maven 3.2.0 or higher

### Building

```bash
$ cd maven-projects/spark
$ mvn clean -DskipTests
```

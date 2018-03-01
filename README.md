# BioTools.jl

| **Release**                                                     | **Documentation**                                                               | **Maintainers**                             |
|:---------------------------------------------------------------:|:-------------------------------------------------------------------------------:|:-------------------------------------------:|
| [![](https://img.shields.io/github/release/BioJulia/BioTools.jl.svg)](https://github.com/BioJulia/BioTools.jl/releases/latest) [![](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/BioJulia/BioTools.jl/blob/master/LICENSE) | [![](https://img.shields.io/badge/docs-stable-blue.svg)](https://biojulia.github.io/BioTools.jl/stable) [![](https://img.shields.io/badge/docs-latest-blue.svg)](https://biojulia.github.io/BioTools.jl/latest) | ![](https://img.shields.io/badge/BioJulia%20Maintainer-Ward9250-orange.svg) |

**Latest release:**

[![Latest Release](https://img.shields.io/github/release/BioJulia/BioTools.jl.svg)](https://github.com/BioJulia/BioTools.jl/releases/latest)
[![BioTools](http://pkg.julialang.org/badges/BioTools_0.6.svg)](http://pkg.julialang.org/?pkg=BioTools)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/BioJulia/BioTools.jl/blob/master/LICENSE)
[![](https://img.shields.io/badge/docs-stable-blue.svg)](https://biojulia.github.io/BioTools.jl/stable)
![BioJulia maintainer: kescobo](https://img.shields.io/badge/BioJulia%20Maintainer-kescobo-orange.svg)

**Development status:**
[![Build Status](https://travis-ci.org/BioJulia/BioTools.jl.svg?branch=master)](https://travis-ci.org/BioJulia/BioTools.jl)
[![Build status](https://ci.appveyor.com/api/projects/status/j9ikh4s0914ke29b/branch/master?svg=true)](https://ci.appveyor.com/project/Ward9250/biotools-jl/branch/master)
[![codecov](https://codecov.io/gh/BioJulia/BioTools.jl/branch/master/graph/badge.svg)](https://codecov.io/gh/BioJulia/BioTools.jl)
[![](https://img.shields.io/badge/docs-latest-blue.svg)](https://biojulia.github.io/BioTools.jl/latest)


## Description

BioTools.jl provides DNA, RNA and amino acid sequence data types for the
julia language, with a comprehensive set of methods for common operations and
IO of major sequence data formats.

## Installation

Install BioTools from the Julia REPL:

```julia
using Pkg
add("BioTools")
# Pkg.add("BioTools") for julia v0.6-
```

If you are interested in the cutting edge of the development, please check out
the master branch to try new features before release.


## Testing

BioTools.jl is tested against Julia `0.6` and current `0.7-dev` on Linux, OS X, and Windows.

| **PackageEvaluator**                                            | **Latest Build Status**                                                                                |
|:---------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------:|
| [![](https://pkg.julialang.org/badges/BioTools_0.6.svg)](https://pkg.julialang.org/detail/BioTools) [![](https://pkg.julialang.org/badges/BioTools_0.7.svg)](https://pkg.julialang.org/detail/BioTools) | [![](https://img.shields.io/travis/BioJulia/BioTools.jl/master.svg?label=Linux+/+macOS)](https://travis-ci.org/BioJulia/BioTools.jl) [![](https://ci.appveyor.com/api/projects/status/j9ikh4s0914ke29b?svg=true)](https://ci.appveyor.com/project/Ward9250/biotools-jl/branch/master) [![](https://codecov.io/gh/BioJulia/BioTools.jl/branch/master/graph/badge.svg)](https://codecov.io/gh/BioJulia/BioTools.jl) |



## Contributing and Questions

We appreciate contributions from users including reporting bugs, fixing issues,
improving performance and adding new features.
Please go to the [contributing section of the documentation](https://biojulia.net/Contributing/latest)
for more information.

If you have a question about
contributing or using this package, you are encouraged to use the
[Bio category of the Julia discourse
site](https://discourse.julialang.org/c/domain/bio).

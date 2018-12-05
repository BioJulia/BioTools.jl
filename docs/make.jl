using Documenter, BioTools

makedocs(
    format = :html,
    modules = [BioTools.BLAST],
    sitename = "BioTools.jl",
    doctest = false,
    strict = false,
    pages = [
        "Home" => "index.md",
        "BLAST" => "blast.md"
    ],
    authors = "The BioJulia Organisation and other contributors."
)

deploydocs(
    repo = "github.com/BioJulia/BioTools.jl.git",
    deps = nothing,
    make = nothing
)

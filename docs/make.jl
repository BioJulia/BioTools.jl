using Documenter, BioTools, BioSymbols

makedocs(
    format = :html,
    sitename = "BioTools.jl",
    pages = [
        "Home" => "index.md",
        "BLAST" => "blast.md",
        "Contributing" => "contributing.md"
    ],
    authors = "The BioJulia Organisation and other contributors."
)

deploydocs(
    repo = "github.com/BioJulia/BioTools.jl.git",
    julia = "0.6",
    osname = "linux",
    target = "build",
    deps = nothing,
    make = nothing
)

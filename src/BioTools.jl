module BioTools

function __init__()
    @warn "This package has been depreceated, and should not be used for new projects. Please see BioTools.jl's repository README for more information."
end

include("blast/BLAST.jl")

end # module Tools

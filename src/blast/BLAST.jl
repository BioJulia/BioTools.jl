# Module BLAST
# ============
# 
# A module for running command line BLAST and parsing BLAST output files. 

module BLAST

export
    blastn,
    blastp,
    readblastXML,
    BLASTResult

import BioAlignments: AlignedSequence
import BioSequences: BioSequence, DNASequence, AminoAcidSequence
import EzXML

include("blastcommandline.jl")

end # module BLAST

module TestTools

using Test

using BioSequences,
      BioTools.BLAST

import BioCore.Testing:
    get_bio_fmt_specimens

fmtdir = get_bio_fmt_specimens()

if !Sys.iswindows()  # temporarily disable the BLAST tests on Windows (issue: #197)

@testset "BLAST+ blastn" begin
    na1 = dna"""
    CGGACCAGACGGACACAGGGAGAAGCTAGTTTCTTTCATGTGATTGANAT
    NATGACTCTACTCCTAAAAGGGAAAAANCAATATCCTTGTTTACAGAAGA
    GAAACAAACAAGCCCCACTCAGCTCAGTCACAGGAGAGAN
    """
    na2 = dna"""
    CGGAGCCAGCGAGCATATGCTGCATGAGGACCTTTCTATCTTACATTATG
    GCTGGGAATCTTACTCTTTCATCTGATACCTTGTTCAGATTTCAAAATAG
    TTGTAGCCTTATCCTGGTTTTACAGATGTGAAACTTTCAA
    """
    fna = joinpath(fmtdir, "FASTA", "f002.fasta")
    nucldb = joinpath(fmtdir, "BLASTDB", "f002")
    nuclresults = joinpath(fmtdir, "BLASTDB", "f002.xml")

    @test typeof(blastn(na1, na2)) == Array{BLASTResult, 1}
    @test typeof(blastn(na1, [na1, na2])) == Array{BLASTResult, 1}
    @test typeof(blastn([na1, na2], [na1, na2])) == Array{BLASTResult, 1}
    @test typeof(blastn(na1, nucldb, db=true)) == Array{BLASTResult, 1}
    @test typeof(blastn(na1, fna)) == Array{BLASTResult, 1}
    @test typeof(blastn(fna, nucldb, db=true)) == Array{BLASTResult, 1}
end

@testset "BLAST+ blastp" begin
    aa1 = aa"""
    MWATLPLLCAGAWLLGVPVCGAAELSVNSLEKFHFKSWMSKHRKTYSTEE
    YHHRLQTFASNWRKINAHNNGNHTFKMALNQFSDMSFAEIKHKYLWSEPQ
    NCSATKSNYLRGTGPYPPSVDWRKKGNFVSPVKNQGACGS
    """
    aa2 = aa"""
    MWTALPLLCAGAWLLSAGATAELTVNAIEKFHFTSWMKQHQKTYSSREYS
    HRLQVFANNWRKIQAHNQRNHTFKMGLNQFSDMSFAEIKHKYLWSEPQNC
    SATKSNYLRGTGPYPSSMDWRKKGNVVSPVKNQGACGSCW
    """
    faa = joinpath(fmtdir, "FASTA", "cysprot.fasta")
    protdb = joinpath(fmtdir, "BLASTDB", "cysprot")
    protresults = joinpath(fmtdir, "BLASTDB", "cysprot.xml")

    @test typeof(blastp(aa1, aa2)) == Array{BLASTResult, 1}
    @test typeof(blastp(aa1, [aa1, aa2])) == Array{BLASTResult, 1}
    @test typeof(blastp([aa1, aa2], [aa1, aa2])) == Array{BLASTResult, 1}
    @test typeof(blastp(aa1, protdb, db=true)) == Array{BLASTResult, 1}
    @test typeof(blastp(aa1, faa)) == Array{BLASTResult, 1}
    @test typeof(blastp(faa, protdb, db=true)) == Array{BLASTResult, 1}
end

end  # if !is_windows()

end # TestTools

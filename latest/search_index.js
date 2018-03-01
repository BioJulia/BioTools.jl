var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#BioTools.jl-1",
    "page": "Home",
    "title": "BioTools.jl",
    "category": "section",
    "text": "Release Documentation Maintainers\n(Image: ) (Image: ) (Image: ) (Image: ) (Image: )Latest release:(Image: Latest Release) (Image: BioTools) (Image: License) (Image: ) (Image: BioJulia maintainer: kescobo)Development status: (Image: Build Status) (Image: Build status) (Image: codecov) (Image: )"
},

{
    "location": "index.html#Description-1",
    "page": "Home",
    "title": "Description",
    "category": "section",
    "text": "BioTools.jl provides DNA, RNA and amino acid sequence data types for the julia language, with a comprehensive set of methods for common operations and IO of major sequence data formats."
},

{
    "location": "index.html#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "Install BioTools from the Julia REPL:using Pkg\nadd(\"BioTools\")\n# Pkg.add(\"BioTools\") for julia v0.6-If you are interested in the cutting edge of the development, please check out the master branch to try new features before release."
},

{
    "location": "index.html#Testing-1",
    "page": "Home",
    "title": "Testing",
    "category": "section",
    "text": "BioTools.jl is tested against Julia 0.6 and current 0.7-dev on Linux, OS X, and Windows.PackageEvaluator Latest Build Status\n(Image: ) (Image: ) (Image: ) (Image: ) (Image: )"
},

{
    "location": "index.html#Contributing-and-Questions-1",
    "page": "Home",
    "title": "Contributing and Questions",
    "category": "section",
    "text": "We appreciate contributions from users including reporting bugs, fixing issues, improving performance and adding new features. Please go to the contributing section of the documentation for more information.If you have a question about contributing or using this package, you are encouraged to use the Bio category of the Julia discourse site."
},

{
    "location": "blast.html#",
    "page": "BLAST",
    "title": "BLAST",
    "category": "page",
    "text": "CurrentModule = BioTools.BLAST"
},

{
    "location": "blast.html#The-BioTools-BLAST-wrapper-1",
    "page": "BLAST",
    "title": "The BioTools BLAST wrapper",
    "category": "section",
    "text": "The BioTools.BLAST module is a wrapper for the command line interface of BLAST+ from NCBI. It requires that you have BLAST+  installed and accessible in your PATH (eg. you should be able to execute $ blastn -h from the command line)."
},

{
    "location": "blast.html#The-Basics-1",
    "page": "BLAST",
    "title": "The Basics",
    "category": "section",
    "text": "This module allows you to run protein and nucleotide BLAST (blastp and blastn respectively) within julia and to parse BLAST results into Bio.jl types.using BioSequences,\n      BioTools.BLAST\n\nseq1 = dna\"\"\"\nCGGACCAGACGGACACAGGGAGAAGCTAGTTTCTTTCATGTGATTGANAT\nNATGACTCTACTCCTAAAAGGGAAAAANCAATATCCTTGTTTACAGAAGA\nGAAACAAACAAGCCCCACTCAGCTCAGTCACAGGAGAGAN\n\"\"\"\n\nseq2 = dna\"\"\"\nCGGAGCCAGCGAGCATATGCTGCATGAGGACCTTTCTATCTTACATTATG\nGCTGGGAATCTTACTCTTTCATCTGATACCTTGTTCAGATTTCAAAATAG\nTTGTAGCCTTATCCTGGTTTTACAGATGTGAAACTTTCAA\n\"\"\"\n\nblastn(seq1, seq2)These functions return a Vector{BLASTResult}. Each element is a hit which includes the sequence of the hit, an AlignedSequence using the original query as a reference and some additional information (expect vaue, bitscore) for the hit.immutable BLASTResult\n    bitscore::Float64\n    expect::Float64\n    queryname::String\n    hitname::String\n    hit::BioSequence\n    alignment::AlignedSequence\nendIf you\'ve already run a blast analysis or have downloaded blast results in XML format from NCBI you can also pass an XML string to readblastXML() in order to obtain an array of BLASTResults.results = readall(open(\"blast_results.xml\"))\n# need to use `readstring` instead of `readall` for v0.5\nreadblastXML(results)When parsing protein blast results, you must include the argument  seqtype=\"prot\", eg. readblastXML(\"results, seqtype=\"prot\")."
},

{
    "location": "blast.html#Options-for-blastn-and-blastp-1",
    "page": "BLAST",
    "title": "Options for blastn and blastp",
    "category": "section",
    "text": "Both of the basic BLAST+ commands can accept a single BioSequence, a Vector{BioSequence} or a sting representing a file path to a fasta formatted file as arguments for both query and subject.blastn([seq1, seq2], [seq2, seq3])\n\nblastp(aaseq, \"path/to/sequences.fasta\")If you have a local blast database (eg through the use of $ makeblastdb), you can use this database as the subjectblastn(seq1, \"path/to/blast_db\", db=true)If you want to modify the search using additional options (eg. return only results with greater than 90% identity), you may pass a Vector of flags (see here for valid arguments - do not use flags that will alter file handling such as -outfmt)blastn(seq1, seq2, [\"-perc_identity\", 90, \"-evalue\", \"9.0\"])"
},

{
    "location": "contributing.html#",
    "page": "Contributing",
    "title": "Contributing",
    "category": "page",
    "text": ""
},

{
    "location": "contributing.html#Contributing-1",
    "page": "Contributing",
    "title": "Contributing",
    "category": "section",
    "text": "We appreciate contributions from users including reporting bugs, fixing issues, improving performance and adding new features.If you have a question about contributing or using this package, you are encouraged to use the Bio category of the Julia discourse site.Detailed guidance for contributing to all BioJulia packages is provided at the BioJulia Contribution Documentation.Here we list specific details about contributing and maintainership pertaining specifically to the BioTools.jl package."
},

{
    "location": "contributing.html#Named-maintainers-1",
    "page": "Contributing",
    "title": "Named maintainers",
    "category": "section",
    "text": "The named maintainers of this package are: Kevin Bonham. It is their responsibility to make final choices about pull requests and issues, although because of our community structure, you will find other maintainers assisting them."
},

{
    "location": "contributing.html#Branching-model-1",
    "page": "Contributing",
    "title": "Branching model",
    "category": "section",
    "text": "The branching model used to develop and make releases of this package is the OneFlow model summarized in the BioJulia Contribution Documentation"
},

]}

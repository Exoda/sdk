import { ChainId } from '../src/enums'
import { INIT_CODE_HASH } from '../src/constants'
import { keccak256 } from '@ethersproject/solidity'

// import { bytecode } from "@sushiswap/core/artifacts/contracts/uniswapv2/UniswapV2Pair.sol/UniswapV2Pair.json";

// this _could_ go in constants, except that it would cost every consumer of the sdk the CPU to compute the hash
// and load the JSON.

// Had to hard code bytecode, importing from hardhat artifacts appears to fail.
const COMPUTED_INIT_CODE_HASH = keccak256(
  ['bytes'],
  [
    '0x60a060405260016009553480156200001657600080fd5b5060405180604001604052806006815260200165506c61736d6160d01b8152508060405180604001604052806006815260200165454e4552475960d01b815250816003908162000067919062000145565b50600462000076828262000145565b505050506200008a6200009c60201b60201c565b6001600160a01b031660805262000211565b3390565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620000cb57607f821691505b602082108103620000ec57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200014057600081815260208120601f850160051c810160208610156200011b5750805b601f850160051c820191505b818110156200013c5782815560010162000127565b5050505b505050565b81516001600160401b03811115620001615762000161620000a0565b6200017981620001728454620000b6565b84620000f2565b602080601f831160018114620001b15760008415620001985750858301515b600019600386901b1c1916600185901b1785556200013c565b600085815260208120601f198616915b82811015620001e257888601518255948401946001909101908401620001c1565b5085821015620002015787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b608051613ba7620002426000396000818161046101528181610c1a01528181610f8f0152612af80152613ba76000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c80636a62784211610104578063a9059cbb116100a2578063d21220a711610071578063d21220a714610485578063d505accf146104a3578063dd62ed3e146104b6578063fff6cae9146104fc57600080fd5b8063a9059cbb14610431578063ba9a7a5614610444578063bc25cf771461044c578063c45a01551461045f57600080fd5b80637ecebe00116100de5780637ecebe00146103b857806389afcb44146103ee57806395d89b4114610416578063a457c2d71461041e57600080fd5b80636a6278421461036757806370a082311461037a5780637464fc3d146103b057600080fd5b806330adf81f11610171578063395093511161014b5780633950935114610331578063485cc955146103445780635909c0d5146103575780635a3d54931461035f57600080fd5b806330adf81f146102f4578063313ce5671461031a5780633644e5151461032957600080fd5b8063095ea7b3116101ad578063095ea7b31461026d5780630dfe16811461029057806318160ddd146102cf57806323b872dd146102e157600080fd5b8063022c0d9f146101d457806306fdde03146101e95780630902f1ac14610207575b600080fd5b6101e76101e2366004613539565b610504565b005b6101f161092f565b6040516101fe91906135f3565b60405180910390f35b600a54604080516dffffffffffffffffffffffffffff80841682526e01000000000000000000000000000084041660208201527c010000000000000000000000000000000000000000000000000000000090920463ffffffff16908201526060016101fe565b61028061027b366004613644565b610ac6565b60405190151581526020016101fe565b600b5473ffffffffffffffffffffffffffffffffffffffff165b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101fe565b6000545b6040519081526020016101fe565b6102806102ef366004613670565b610ae0565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c96102d3565b604051601281526020016101fe565b6102d3610b06565b61028061033f366004613644565b610bcb565b6101e76103523660046136b1565b610c17565b6006546102d3565b6007546102d3565b6102d36103753660046136ea565b610d09565b6102d36103883660046136ea565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205490565b6008546102d3565b6102d36103c63660046136ea565b73ffffffffffffffffffffffffffffffffffffffff1660009081526005602052604090205490565b6104016103fc3660046136ea565b611330565b604080519283526020830191909152016101fe565b6101f1611831565b61028061042c366004613644565b6118c3565b61028061043f366004613644565b611979565b6103e86102d3565b6101e761045a3660046136ea565b611987565b7f00000000000000000000000000000000000000000000000000000000000000006102aa565b600c5473ffffffffffffffffffffffffffffffffffffffff166102aa565b6101e76104b1366004613707565b611b41565b6102d36104c43660046136b1565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260026020908152604080832093909416825291909152205490565b6101e7611e31565b600954600114610575576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f45503a204c4f434b45440000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b6000600955841515806105885750600084115b6105ee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f45503a20494e53554646494349454e545f4f55545055545f414d4f554e540000604482015260640161056c565b6040805160808101825260008082526020820152600a546dffffffffffffffffffffffffffff6e0100000000000000000000000000008204811660608401521691810182905290861061069d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f45503a20494e53554646494349454e545f4c4951554944495459000000000000604482015260640161056c565b80606001516dffffffffffffffffffffffffffff16851061071a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f45503a20494e53554646494349454e545f4c4951554944495459000000000000604482015260640161056c565b610727848787868661201d565b6020830152815260008061073c8888856122e7565b91509150600082118061074f5750600081115b6107b5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45503a20494e53554646494349454e545f494e5055545f414d4f554e54000000604482015260640161056c565b60006107c28360036137ad565b84516107d0906103e86137ad565b6107da91906137ea565b905060006107e98360036137ad565b60208601516107fa906103e86137ad565b61080491906137ea565b905061084261083a86604001516dffffffffffffffffffffffffffff1687606001516dffffffffffffffffffffffffffff160290565b620f42400290565b61084c82846137ad565b10156108b4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f45503a204b000000000000000000000000000000000000000000000000000000604482015260640161056c565b50506108bf8361236f565b60408051838152602081018390528082018a905260608101899052905173ffffffffffffffffffffffffffffffffffffffff88169133917fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229181900360800190a350506001600955505050505050565b600b54604080517f95d89b41000000000000000000000000000000000000000000000000000000008152905160609273ffffffffffffffffffffffffffffffffffffffff16916395d89b419160048083019260009291908290030181865afa15801561099f573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526109e5919081019061382c565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa158015610a52573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610a98919081019061382c565b610aa0612662565b604051602001610ab2939291906138ec565b604051602081830303815290604052905090565b600033610ad4818585612671565b60019150505b92915050565b600033610aee8582856127da565b610af98585856128b1565b60019150505b9392505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f610b3161092f565b8051602091820120604080518082018252600181527f310000000000000000000000000000000000000000000000000000000000000090840152805192830193909352918101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b33600081815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909190610ad49082908690610c12908790613983565b612671565b337f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1614610cb6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f45503a20464f5242494444454e00000000000000000000000000000000000000604482015260640161056c565b600b805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff000000000000000000000000000000000000000091821617909155600c8054929093169116179055565b6000600954600114610d77576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f45503a204c4f434b454400000000000000000000000000000000000000000000604482015260640161056c565b6000600981905560408051608081018252828152602080820193909352600a546dffffffffffffffffffffffffffff6e0100000000000000000000000000008204811660608401521681830152600b5482517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529251919373ffffffffffffffffffffffffffffffffffffffff909116926370a0823192602480830193928290030181865afa158015610e35573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e599190613996565b8152600c546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa158015610ec9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eed9190613996565b602082015260408101518151600091610f18916dffffffffffffffffffffffffffff909116906137ea565b9050600082606001516dffffffffffffffffffffffffffff168360200151610f4091906137ea565b90506000610f7d610f7885604001516dffffffffffffffffffffffffffff1686606001516dffffffffffffffffffffffffffff160290565b612af3565b600080549192508181036111f45760007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637cd07e476040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ff8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061101c91906139af565b905073ffffffffffffffffffffffffffffffffffffffff81163303611147578073ffffffffffffffffffffffffffffffffffffffff166340dc0e376040518163ffffffff1660e01b8152600401602060405180830381865afa158015611086573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110aa9190613996565b91506000821180156110dc57507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214155b611142576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f45503a204c6971756964697479204572726f7200000000000000000000000000604482015260640161056c565b6111ee565b73ffffffffffffffffffffffffffffffffffffffff8116156111c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f45503a204d69677261746f722073657400000000000000000000000000000000604482015260640161056c565b6103e86111da6111d587896137ad565b612c39565b6111e491906137ea565b91506111ee612dc0565b5061124d565b61124a61121e61120484886137ad565b88604001516dffffffffffffffffffffffffffff16612ec0565b61124561122b85886137ad565b89606001516dffffffffffffffffffffffffffff16612ec0565b612ed9565b90505b600081116112b7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f45503a20494e53554646494349454e545f4c4951554944495459000000000000604482015260640161056c565b6112c18882612eee565b6112ca8661236f565b82156112e557602086015186516112e191906137ad565b6008555b604080518681526020810186905233917f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f910160405180910390a26001600955979650505050505050565b60008060095460011461139f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f45503a204c4f434b454400000000000000000000000000000000000000000000604482015260640161056c565b6000600981905560408051608081018252828152602080820193909352600a546dffffffffffffffffffffffffffff6e0100000000000000000000000000008204811660608401521681830152600b5482517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529251919373ffffffffffffffffffffffffffffffffffffffff909116926370a0823192602480830193928290030181865afa15801561145d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114819190613996565b8152600c546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa1580156114f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115159190613996565b602082015260006115483073ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205490565b90506000611580610f7884604001516dffffffffffffffffffffffffffff1685606001516dffffffffffffffffffffffffffff160290565b6000805485519293509161159e9061159890866137ad565b83612ec0565b905060006115bb8660200151866115b591906137ad565b84612ec0565b90506000821180156115cd5750600081115b611633576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f45503a20494e53554646494349454e545f4c4951554944495459000000000000604482015260640161056c565b61163d308661300d565b600b546116619073ffffffffffffffffffffffffffffffffffffffff168a846131a6565b600c546116859073ffffffffffffffffffffffffffffffffffffffff168a836131a6565b600b546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa1580156116f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117179190613996565b8652600c546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa158015611787573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117ab9190613996565b60208701526117b98661236f565b83156117cb5760208601518651026008555b604080518381526020810183905273ffffffffffffffffffffffffffffffffffffffff8b169133917fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496910160405180910390a36001600955909890975095505050505050565b606060048054611840906139cc565b80601f016020809104026020016040519081016040528092919081815260200182805461186c906139cc565b80156118b95780601f1061188e576101008083540402835291602001916118b9565b820191906000526020600020905b81548152906001019060200180831161189c57829003601f168201915b5050505050905090565b33600081815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919083811015611961576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f45524332303a207265647563656420616c6c6f77616e63652062656c6f772030604482015260640161056c565b61196e8286868403612671565b506001949350505050565b600033610ad48185856128b1565b6009546001146119f3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f45503a204c4f434b454400000000000000000000000000000000000000000000604482015260640161056c565b6000600955600b54600a546040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152611ab69273ffffffffffffffffffffffffffffffffffffffff169184916dffffffffffffffffffffffffffff9091169083906370a08231906024015b602060405180830381865afa158015611a83573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611aa79190613996565b611ab191906137ea565b6131a6565b600c54600a546040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152611b399273ffffffffffffffffffffffffffffffffffffffff169184916e0100000000000000000000000000009091046dffffffffffffffffffffffffffff169083906370a0823190602401611a66565b506001600955565b42841015611bab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f45786f6669737761703a20455850495245440000000000000000000000000000604482015260640161056c565b6000611bb5610b06565b73ffffffffffffffffffffffffffffffffffffffff8916600090815260056020526040812080547f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9928c928c928c92909190611c1083613a19565b9091555060408051602081019690965273ffffffffffffffffffffffffffffffffffffffff94851690860152929091166060840152608083015260a082015260c0810187905260e00160405160208183030381529060405280519060200120604051602001611cb19291907f190100000000000000000000000000000000000000000000000000000000000081526002810192909252602282015260420190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611d3a573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff811615801590611db557508873ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b611e1b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f45786f6669737761703a20494e56414c49445f5349474e415455524500000000604482015260640161056c565b611e26898989612671565b505050505050505050565b600954600114611e9d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f45503a204c4f434b454400000000000000000000000000000000000000000000604482015260640161056c565b6000600955604080516080810191829052600b547f70a082310000000000000000000000000000000000000000000000000000000090925230608482015261201691819073ffffffffffffffffffffffffffffffffffffffff166370a0823160a48301602060405180830381865afa158015611f1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f419190613996565b8152600c546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260209092019173ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa158015611fb7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fdb9190613996565b8152600a546dffffffffffffffffffffffffffff80821660208401526e0100000000000000000000000000009091041660409091015261236f565b6001600955565b600b54600090819073ffffffffffffffffffffffffffffffffffffffff8881169116148015906120685750600c5473ffffffffffffffffffffffffffffffffffffffff888116911614155b6120ce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f45503a20494e56414c49445f544f000000000000000000000000000000000000604482015260640161056c565b85156120f857600b546120f89073ffffffffffffffffffffffffffffffffffffffff1688886131a6565b841561212257600c546121229073ffffffffffffffffffffffffffffffffffffffff1688876131a6565b82156121b5576040517f2a5559c900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff881690632a5559c9906121829033908a908a908a908a90600401613a51565b600060405180830381600087803b15801561219c57600080fd5b505af11580156121b0573d6000803e3d6000fd5b505050505b600b546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa158015612223573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122479190613996565b600c546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa1580156122b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122d99190613996565b915091509550959350505050565b600080600061230a84604001516dffffffffffffffffffffffffffff1687900390565b9050600061232c85606001516dffffffffffffffffffffffffffff1687900390565b905081856000015111612340576000612346565b84518290035b81866020015111612358576000612361565b60208601518290035b935093505050935093915050565b80516dffffffffffffffffffffffffffff10156123e8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f45503a204f564552464c4f570000000000000000000000000000000000000000604482015260640161056c565b60208101516dffffffffffffffffffffffffffff1015612464576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f45503a204f564552464c4f570000000000000000000000000000000000000000604482015260640161056c565b606081015142906dffffffffffffffffffffffffffff161561256d5760408201516dffffffffffffffffffffffffffff161561256d57600a5463ffffffff7c0100000000000000000000000000000000000000000000000000000000909104811682039081161561256b578063ffffffff1661250f61250585606001516dffffffffffffffffffffffffffff166e0100000000000000000000000000000290565b8560400151613238565b026006600082825401925050819055508063ffffffff1661255f61255585604001516dffffffffffffffffffffffffffff166e0100000000000000000000000000000290565b8560600151613238565b60078054919092020190555b505b8151600a80546020808601516dffffffffffffffffffffffffffff9485167fffffffff00000000000000000000000000000000000000000000000000000000909316929092176e0100000000000000000000000000009285168302177bffffffffffffffffffffffffffffffffffffffffffffffffffffffff81167c010000000000000000000000000000000000000000000000000000000063ffffffff881602908117948590556040805192871691871691909117825292909304909316928201929092527f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1910160405180910390a15050565b606060038054611840906139cc565b73ffffffffffffffffffffffffffffffffffffffff83166126ee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f45524332303a20617070726f76652066726f6d20616464726573732830290000604482015260640161056c565b73ffffffffffffffffffffffffffffffffffffffff821661276b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f45524332303a20617070726f766520746f206164647265737328302900000000604482015260640161056c565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600260209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146128ab578181101561289e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161056c565b6128ab8484848403612671565b50505050565b73ffffffffffffffffffffffffffffffffffffffff831661292e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a207472616e736665722066726f6d206164647265737328302900604482015260640161056c565b73ffffffffffffffffffffffffffffffffffffffff82166129ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a207472616e7366657220746f2061646472657373283029000000604482015260640161056c565b73ffffffffffffffffffffffffffffffffffffffff831660009081526001602052604090205481811015612a3b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a207472616e7366657220657863656564732062616c616e636500604482015260640161056c565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260016020526040808220858503905591851681529081208054849290612a7f908490613983565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051612ae591815260200190565b60405180910390a350505050565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663017e7e586040518163ffffffff1660e01b8152600401602060405180830381865afa158015612b61573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b8591906139af565b60085490915073ffffffffffffffffffffffffffffffffffffffff821615612c23578015612c19576000612bb885612c39565b90506000612bc583612c39565b905080821115612c16576000818303600054612be191906137ad565b90506000612bf28360058602613983565b90506000612c008383612ec0565b90508015612c1257612c128782612eee565b5050505b50505b5060019392505050565b8015612c2f5760006008555b5060009392505050565b600081600003612c4b57506000919050565b8160017001000000000000000000000000000000008210612c715760809190911c9060401b5b680100000000000000008210612c8c5760409190911c9060201b5b6401000000008210612ca35760209190911c9060101b5b620100008210612cb85760109190911c9060081b5b6101008210612ccc5760089190911c9060041b5b60108210612cdf5760049190911c9060021b5b60048210612ceb5760011b5b6001818581612cfc57612cfc613ac9565b048201901c90506001818581612d1457612d14613ac9565b048201901c90506001818581612d2c57612d2c613ac9565b048201901c90506001818581612d4457612d44613ac9565b048201901c90506001818581612d5c57612d5c613ac9565b048201901c90506001818581612d7457612d74613ac9565b048201901c90506001818581612d8c57612d8c613ac9565b048201901c90506000818581612da457612da4613ac9565b04905080821015612db55781612db7565b805b95945050505050565b60005415612e2a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f45503a20546f74616c20737570706c79206e6f74203000000000000000000000604482015260640161056c565b6103e8600080828254612e3d9190613983565b9091555050600080805260016020527fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb4980546103e89290612e7f908490613983565b90915550506040516103e8815260009081907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3565b6000818381612ed157612ed1613ac9565b049392505050565b6000818311612ee85782610aff565b50919050565b73ffffffffffffffffffffffffffffffffffffffff8216612f6b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f45524332303a206d696e7420746f206164647265737328302900000000000000604482015260640161056c565b80600080828254612f7c9190613983565b909155505073ffffffffffffffffffffffffffffffffffffffff821660009081526001602052604081208054839290612fb6908490613983565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff821661308a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f45524332303a206275726e2066726f6d20616464726573732830290000000000604482015260640161056c565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600160205260409020548181101561311a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f45524332303a206275726e20657863656564732062616c616e63650000000000604482015260640161056c565b73ffffffffffffffffffffffffffffffffffffffff831660009081526001602052604081208383039055805483919081906131569084906137ea565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016127cd565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000179052613233908490613254565b505050565b6000610aff6dffffffffffffffffffffffffffff831684613af8565b60006132b6826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661333a9092919063ffffffff16565b80519091501561323357808060200190518101906132d49190613b33565b613233576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f5361666545524332303a2045524332302063616c6c206661696c656400000000604482015260640161056c565b60606133498484600085613351565b949350505050565b6060824710156133bd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f416464726573733a2062616c616e636520746f206c6f7720666f722063616c6c604482015260640161056c565b73ffffffffffffffffffffffffffffffffffffffff85163b61343b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161056c565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516134649190613b55565b60006040518083038185875af1925050503d80600081146134a1576040519150601f19603f3d011682016040523d82523d6000602084013e6134a6565b606091505b50915091506134b68282866134c1565b979650505050505050565b606083156134d0575081610aff565b8251156134e05782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056c91906135f3565b73ffffffffffffffffffffffffffffffffffffffff8116811461353657600080fd5b50565b60008060008060006080868803121561355157600080fd5b8535945060208601359350604086013561356a81613514565b9250606086013567ffffffffffffffff8082111561358757600080fd5b818801915088601f83011261359b57600080fd5b8135818111156135aa57600080fd5b8960208285010111156135bc57600080fd5b9699959850939650602001949392505050565b60005b838110156135ea5781810151838201526020016135d2565b50506000910152565b60208152600082518060208401526136128160408501602087016135cf565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b6000806040838503121561365757600080fd5b823561366281613514565b946020939093013593505050565b60008060006060848603121561368557600080fd5b833561369081613514565b925060208401356136a081613514565b929592945050506040919091013590565b600080604083850312156136c457600080fd5b82356136cf81613514565b915060208301356136df81613514565b809150509250929050565b6000602082840312156136fc57600080fd5b8135610aff81613514565b600080600080600080600060e0888a03121561372257600080fd5b873561372d81613514565b9650602088013561373d81613514565b95506040880135945060608801359350608088013560ff8116811461376157600080fd5b9699959850939692959460a0840135945060c09093013592915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156137e5576137e561377e565b500290565b81810381811115610ada57610ada61377e565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006020828403121561383e57600080fd5b815167ffffffffffffffff8082111561385657600080fd5b818401915084601f83011261386a57600080fd5b81518181111561387c5761387c6137fd565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156138c2576138c26137fd565b816040528281528760208487010111156138db57600080fd5b6134b68360208301602088016135cf565b600084516138fe8184602089016135cf565b7f2f0000000000000000000000000000000000000000000000000000000000000090830190815284516139388160018401602089016135cf565b7f20000000000000000000000000000000000000000000000000000000000000006001929091019182015283516139768160028401602088016135cf565b0160020195945050505050565b80820180821115610ada57610ada61377e565b6000602082840312156139a857600080fd5b5051919050565b6000602082840312156139c157600080fd5b8151610aff81613514565b600181811c908216806139e057607f821691505b602082108103612ee8577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203613a4a57613a4a61377e565b5060010190565b73ffffffffffffffffffffffffffffffffffffffff8616815284602082015283604082015260806060820152816080820152818360a0830137600081830160a090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160101949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600082613b2e577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b600060208284031215613b4557600080fd5b81518015158114610aff57600080fd5b60008251613b678184602087016135cf565b919091019291505056fea2646970667358221220f42265de8b8ffc6e771878e1d298de9d1dd6cd5562a88b5753a3422c3ac4f87a64736f6c63430008100033',
  ]
)

describe('constants', () => {
  describe('INIT_CODE_HASH', () => {
    it('matches computed bytecode hash', () => {
      expect(COMPUTED_INIT_CODE_HASH).toEqual(INIT_CODE_HASH[ChainId.ETHEREUM])
    })
  })
})

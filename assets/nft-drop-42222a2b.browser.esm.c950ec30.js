import{C as f,_ as r,a as i,T as d,A as w,c as W,ai as v,d as A,e as y,f as T,g as b,aj as k,k as S,G as E,i as R,l as N,ak as F,al as I,m as U,n as x,B as c,a3 as m,o as M,p as _}from"./index.187245f2.js";import{S as O}from"./erc-721-standard-b90faf4d.browser.esm.3dfdf8d9.js";import{P as L}from"./thirdweb-checkout-7100edf9.browser.esm.f845406a.js";class l extends O{constructor(t,e,n){var o;let p=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},h=arguments.length>4?arguments[4]:void 0,u=arguments.length>5?arguments[5]:void 0,g=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new f(t,e,h,p);super(g,n,u),o=this,r(this,"abi",void 0),r(this,"encoder",void 0),r(this,"estimator",void 0),r(this,"metadata",void 0),r(this,"app",void 0),r(this,"sales",void 0),r(this,"platformFees",void 0),r(this,"events",void 0),r(this,"roles",void 0),r(this,"interceptor",void 0),r(this,"royalties",void 0),r(this,"claimConditions",void 0),r(this,"revealer",void 0),r(this,"checkout",void 0),r(this,"owner",void 0),r(this,"createBatch",i(async(a,s)=>this.erc721.lazyMint.prepare(a,s))),r(this,"claimTo",i(async function(a,s){let C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return o.erc721.claimTo.prepare(a,s,{checkERC20Allowance:C})})),r(this,"claim",i(async function(a){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return o.claimTo.prepare(await o.contractWrapper.getSignerAddress(),a,s)})),r(this,"burn",i(async a=>this.erc721.burn.prepare(a))),r(this,"transfer",i(async(a,s)=>this.erc721.transfer.prepare(a,s))),r(this,"setApprovalForAll",i(async(a,s)=>this.erc721.setApprovalForAll.prepare(a,s))),r(this,"setApprovalForToken",i(async(a,s)=>d.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[a,s]}))),this.abi=w.parse(h||[]),this.metadata=new W(this.contractWrapper,v,this.storage),this.app=new A(this.contractWrapper,this.metadata,this.storage),this.roles=new y(this.contractWrapper,l.contractRoles),this.royalties=new T(this.contractWrapper,this.metadata),this.sales=new b(this.contractWrapper),this.claimConditions=new k(this.contractWrapper,this.metadata,this.storage),this.encoder=new S(this.contractWrapper),this.estimator=new E(this.contractWrapper),this.events=new R(this.contractWrapper),this.platformFees=new N(this.contractWrapper),this.revealer=new F(this.contractWrapper,this.storage,I.name,()=>this.erc721.nextTokenIdToMint()),this.interceptor=new U(this.contractWrapper),this.owner=new x(this.contractWrapper),this.checkout=new L(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async totalSupply(){const t=await this.totalClaimedSupply(),e=await this.totalUnclaimedSupply();return t.add(e)}async getAllClaimed(t){const e=c.from((t==null?void 0:t.start)||0).toNumber(),n=c.from((t==null?void 0:t.count)||m).toNumber(),o=Math.min((await this.contractWrapper.readContract.nextTokenIdToClaim()).toNumber(),e+n);return await Promise.all(Array.from(Array(o).keys()).map(p=>this.get(p.toString())))}async getAllUnclaimed(t){const e=c.from((t==null?void 0:t.start)||0).toNumber(),n=c.from((t==null?void 0:t.count)||m).toNumber(),o=c.from(Math.max((await this.contractWrapper.readContract.nextTokenIdToClaim()).toNumber(),e)),p=c.from(Math.min((await this.contractWrapper.readContract.nextTokenIdToMint()).toNumber(),o.toNumber()+n));return await Promise.all(Array.from(Array(p.sub(o).toNumber()).keys()).map(h=>this.erc721.getTokenMetadata(o.add(h).toString())))}async totalClaimedSupply(){return this.erc721.totalClaimedSupply()}async totalUnclaimedSupply(){return this.erc721.totalUnclaimedSupply()}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole(M("transfer"),_)}async getClaimTransaction(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return this.erc721.getClaimTransaction(t,e,{checkERC20Allowance:n})}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,e){return this.erc721.isApproved(t,e)}async prepare(t,e,n){return d.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:e,overrides:n})}async call(t,e,n){return this.contractWrapper.call(t,e,n)}}r(l,"contractRoles",["admin","minter","transfer"]);export{l as NFTDrop};

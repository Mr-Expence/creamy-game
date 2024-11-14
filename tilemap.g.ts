// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`300010000000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010202020203000000000000000000000000000000000000000000000000000000000000000000000000000000000000040606060605001300000000000000130000000000000000000000000000000000000000000000000000000000000000070909090908001415151515151515140000000000000000000000000000000000000000000000000000000000000000070909090908001614141414141414170000000000000000000000000000000000000000000000000000000000000000070909090908000000000000000000000000000000000000000000000000000000000000100000000000000000000000070909090908000000000000000000000000000000000000000000000000000000000001020300000f0000000000000007090909090800000000000000000000000000000000000000000000000000000000000406050202020300000000000007090909090800000000000000000000000000010202020203000000000000000e0d0007090804060605000000000000070909090908000000000000000000000000000406060606050000000000000001020207090807090908000000000000070909090908000000000000000000000000000709090909080001020202030004060507090807090908001100000000070909090908000000000000000000000000000709090909080004060606050007090807090807090908000000000000070909090908000000000000000000000000000c090909090b0a0c0909090b0a0c090b0c090b0c09090b0a0a0a0a0a0a0c090909090b0a0a0a0a0a0a0a0a0a0a0a0a0a`, img`
................................................
................................................
................................................
.............................222222.............
.............................222222.2.......2...
.............................222222.222222222...
.............................222222.222222222...
.............................222222.............
.............................222222.............
................222..........222222.............
................2222222......222222.............
222222........2.2222222......222222.............
222222.......2222222222......222222.............
222222.22222.2222222222......222222.............
222222.22222.2222222222......222222.............
222222.22222.2222222222......222222.............
`, [myTiles.transparency16,sprites.builtin.forestTiles1,sprites.builtin.forestTiles2,sprites.builtin.forestTiles3,sprites.builtin.forestTiles5,sprites.builtin.forestTiles7,sprites.builtin.forestTiles6,sprites.builtin.forestTiles9,sprites.builtin.forestTiles11,sprites.builtin.forestTiles10,myTiles.tile1,myTiles.tile4,myTiles.tile5,sprites.builtin.forestTiles4,myTiles.tile6,myTiles.tile2,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.builtin.oceanSand4,sprites.builtin.oceanSand8,sprites.builtin.oceanSand2,sprites.builtin.oceanSand13,sprites.builtin.oceanSand15], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "forestTiles15":
            case "tile4":return tile4;
            case "forestTiles13":
            case "tile5":return tile5;
            case "myTile3":
            case "tile7":return tile7;
            case "myTile4":
            case "tile8":return tile8;
            case "myTile5":
            case "tile9":return tile9;
            case "myTile6":
            case "tile10":return tile10;
            case "myTile7":
            case "tile11":return tile11;
            case "myTile8":
            case "tile12":return tile12;
            case "myTile2":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

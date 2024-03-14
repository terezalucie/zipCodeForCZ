/* PSČ se v České republice vždy skládá z pěti číslic. První číslice odpovídá členění kraje. Neplatí to ovšem vždycky. Další číslice v PSČ definují obec nebo městskou část obce. */

// PRAHA - 10 - 19

let prahaMesto = [10000, 10100, 10200, 10300, 10400, 10600, 10700, 10900, 11000, 11001, 11800, 11900, 12000, 12800, 13000, 14000, 14100, 14200, 14300, 14800, 14900, 15000, 15200, 15300, 15400, 15500, 15521, 15531, 15600, 15900, 16000, 16200, 16300, 16400, 16500, 16900, 17000, 17100, 18000, 18100, 18200, 18400, 19000, 19011, 19012, 19014, 19015, 19016, 19017, 19300, 19600, 19700, 19800, 19900] 

// PRAHA - 10 - 19
// STŘEDOČESKÝ KRAJ - 25 - 29

let prahaVychodSCK = [25001, 25063, 25064, 25065, 25066, 25067, 25068, 25069, 25070, 25072, 25073, 25074, 25075, 25081, 25082, 25083, 25084, 25087, 25088, 25089, 25090, 25091, 25092, 25101, 25162, 25163, 25164, 25165, 25166, 25168, 25169, 25170, 27714, 28162, 28163, 28166, 28167, 29476]

let prahaZapadSCK = [25202, 25203, 25204, 25205, 25206, 25207, 25208, 25209, 25210, 25216, 25217, 25218, 25219, 25225, 25226, 25228, 25229, 25230, 25231, 25241, 25242, 25243, 25244, 25245, 25246, 25250, 25261, 25262, 25263, 25264, 25265, 25266, 25267, 25268, 25281, 25282, 25301, 25303, 25401]

let benesovSCK = [25167, 25601, 25701, 25703, 25705, 25706, 25708, 25709, 25721, 25722, 25723, 25724, 25726, 25728, 25741, 25742, 25744, 25751, 25753, 25754, 25755, 25756, 25762, 25763, 25764, 25765, 25766, 25768, 25771, 25786, 25788, 25789, 25790, 25801, 25901] 

let pribramSCK = [25791, 25792, 26101, 26102, 26202, 26203, 26204, 26205, 26206, 26211, 26212, 26213, 26214, 26215, 26221, 26222, 26223, 26225, 26231, 26232, 26241, 26242, 26243, 26244, 26251, 26252, 26255, 26256, 26261, 26262, 26263, 26272, 26281, 26284, 26285, 26291, 26293, 26294, 26301, 26401] 

let berounSCK = [26601, 26701, 26703, 26705, 26706, 26707, 26711, 26712, 26716, 26717, 26718, 26721, 26722, 26723, 26724, 26725, 26726, 26727, 26728, 26729, 26741, 26742, 26743, 26751, 26753, 26754, 26761, 26762, 26763, 26764, 26801]

let rakovnikSCK = [26901, 27001, 27002, 27004, 27006, 27007, 27008, 27009, 27021, 27023, 27024, 27031, 27032, 27033, 27034, 27035, 27036, 27041, 27042, 27051, 27052, 27053, 27054, 27055, 27062, 27064] 

let kladnoSCK = [27061, 27101, 27201, 27203, 27204, 27301, 27302, 27303, 27304, 27305, 27306, 27307, 27308, 27309, 27321, 27322, 27323, 27324, 27325, 27326, 27327, 27328, 27329, 27341, 27342, 27343, 27345, 27351, 27353, 27354, 27361, 27362, 27363, 27364, 27371, 27372, 27373, 27374, 27375, 27376, 27377, 27378, 27379, 27401] 

let melnikSCK = [27601, 27701, 27703, 27704, 27705, 27706, 27707, 27708, 27711, 27713, 27715, 27716, 27721, 27723, 27724, 27731, 27732, 27733, 27734, 27735, 27736, 27737, 27738, 27741, 27742, 27743, 27744, 27745, 27746, 27751, 27752, 27801]

let nymburkSCK = [28802, 28901, 28902, 28903, 28904, 28906, 28907, 28908, 28912, 28913, 28915, 28916, 28917, 28921, 28922, 28923, 28924, 28925, 28926, 28931, 28932, 28933, 28934, 28935, 28936, 28937, 29001]

let kolinSCK = [28002, 28101, 28102, 28103, 28104, 28106, 28107, 28121, 28123, 28125, 28126, 28127, 28128, 28129, 28130, 28141, 28143, 28144, 28146, 28151, 28161, 28171, 28201, 28905, 28911, 28914, 28941]

let kutnaHoraSCK = [28401, 28403, 28404, 28501, 28502, 28504, 28506, 28507, 28509, 28510, 28511, 28521, 28522, 28523, 28525, 28531, 28532, 28533, 28541, 28542, 28543, 28545, 28546, 28547, 28561, 28562, 28563, 28564, 28565, 28571, 28572, 28573, 28574, 28575, 28576, 28601]

let mladaBoleslavSCK = [29301, 29306, 29307, 29401, 29402, 29403, 29404, 29405, 29406, 29411, 29412, 29413, 29414, 29415, 29421, 29423, 29424, 29425, 29426, 29427, 29428, 29429, 29430, 29431, 29441, 29442, 29443, 29445, 29446, 29447, 29448, 29471, 29473, 29474, 29475, 29477, 29478, 29479, 29501]

// STŘEDOČESKÝ KRAJ  - 25 - 29
// PLZEŇSKÝ KRAJ - 30 - 34


let plzenMestoPK = [30100, 31200, 31500, 31600, 31800, 32000, 32100, 32200, 32300, 32600, 33001, 33002, 33003, 33201, 33202, 33203, 33204, 33205]

let plzenSeverPK = [33004, 33005, 33007, 33008, 33011, 33012, 33013, 33014, 33016, 33017, 33021, 33022, 33023, 33024, 33025, 33026, 33027, 33032, 33033, 33035, 33036, 33038, 33040, 33041, 33101, 33141, 33144, 33151, 33152, 33162, 33163, 33165]

let klatovyPK = [33901, 34004, 34012, 34014, 34021, 34022, 34034, 34101, 34141, 34142, 34151, 34191, 34192, 34201]

let plzenJihPK = [33207, 33209, 33211, 33214, 33301, 33401, 33441, 33442, 33443, 33444, 33452, 33453, 33454, 33455, 33501, 33503, 33541, 33543, 33544, 33546, 33547, 33551, 33554, 33555, 33561, 33563, 33564, 33601]

let domazlicePK = [34401, 34501, 34502, 34506, 34507, 34509, 34521, 34522, 34525, 34526, 34532, 34533, 34534, 34535, 34543, 34545, 34553, 34561, 34562, 34601]

let rokycanyPK = [33701, 33801, 33805, 33806, 33808, 33821, 33822, 33824, 33828, 33841, 33842, 33843, 33844, 33845]


let tachovPK = [34701, 34801, 34802, 34806, 34807, 34813, 34815, 34816, 34901, 34952, 34953, 34958, 34961, 34972]

// PLZEŇSKÝ KRAJ - 30 - 34
// KARLOVARSKÝ KRAJ - 35 - 36

let chebKVK = [35002, 35101, 35124, 35131, 35132, 35134, 35135, 35137, 35201, 35301, 35491, 35493, 36461]
// 36461

let sokolovKVK = [35601, 35604, 35701, 35703, 35707, 35708, 35709, 35731, 35733, 35734, 35735, 35751, 35755, 35801]

let karlovyVaryKVK = [36001, 36002, 36004, 36005, 36006, 36007, 36010, 36017, 36018, 36020, 36207, 36211, 36221, 36222, 36225, 36233, 36234, 36235, 36236, 36251, 36262, 36263, 36272, 36273, 36301, 36401, 36452, 36453, 36455, 36464, 36471]

// KARLOVARSKÝ KRAJ - 35 - 36
// JIHOČESKÝ KRAJ - 37 - 39

let ceskeBudejoviceJCK = [37001, 37004, 37005, 37006, 37007, 37008, 37010, 37011, 37012, 37301, 37302, 37304, 37305, 37311, 37312, 37314, 37315, 37316, 37321, 37322, 37323, 37324, 37331, 37332, 37333, 37335, 37336, 37341, 37343, 37344, 37346, 37347, 37348, 37349, 37350, 37351, 37361, 37362, 37363, 37364, 37365, 37366, 37367, 37371, 37372, 37373, 37381, 37382, 37384, 37401, 37501]


let jindrichuvHradecJCK = [37701, 37801, 37802, 37803, 37804, 37806, 37807, 37808, 37809, 37810, 37816, 37817, 37818, 37821, 37824, 37825, 37826, 37831, 37832, 37833, 37841, 37842, 37843, 37846, 37852, 37853, 37855, 37856, 37861, 37862, 37871, 37872, 37873, 37881, 37882, 37883, 37891, 37892, 37901, 38001]
// 38001

let ceskyKrumlovJCK = [38101, 38201, 38202, 38203, 38206, 38208, 38211, 38216, 38218, 38221, 38222, 38223, 38226, 38229, 38232, 38241, 38242, 38272, 38273, 38276, 38278, 38279, 38281, 38282, 38283, 38291, 38292, 38293]

let prachaticeJCK = [38301, 38307, 38401, 38402, 38403, 38404, 38411, 38421, 38422, 38425, 38426, 38427, 38432, 38433, 38441, 38442, 38443, 38444, 38451, 38462, 38471, 38472, 38473, 38481, 38486, 38491, 38492, 38493, 38501]

let strakoniceJCK = [38601, 38701, 38706, 38711, 38715, 38716, 38719, 38731, 38732, 38733, 38734, 38735, 38736, 38737, 38742, 38743, 38751, 38752, 38756, 38771, 38772, 38773, 38775, 38801, 38901]


let taborJCK = [39001, 39002, 39003, 39005, 39101, 39102, 39111, 39116, 39117, 39118, 39120, 39121, 39126, 39127, 39131, 39132, 39133, 39135, 39136, 39137, 39142, 39143, 39152, 39153, 39155, 39156, 39161, 39162, 39165, 39171, 39172, 39173, 39174, 39175, 39176, 39181, 39201, 39852]

let pisekJCK = [39701, 39801, 39804, 39806, 39807, 39811, 39815, 39816, 39817, 39818, 39819, 39821, 39822, 39831, 39832, 39833, 39834, 39835, 39842, 39843, 39847, 39848, 39851, 39853, 39855, 39858, 39859, 39901]

// JIHOČESKÝ KRAJ - 37 - 39
// ÚSTECKÝ KRAJ - 40 - 44
  
let ustiNadLabemUK = [40001, 40002, 40003, 40004, 40007, 40010, 40011, 40301, 40302, 40313, 40317, 40321, 40322, 40323, 40327, 40331, 40332, 40334, 40335, 40336, 40337, 40338, 40339, 40340, 40371]

let decinUK = [40502, 40505, 40507, 40701, 40702, 40703, 40711, 40713, 40714, 40715, 40716, 40717, 40721, 40722, 40723, 40724, 40725, 40729, 40741, 40742, 40744, 40745, 40746, 40747, 40751, 40752, 40753, 40755, 40756, 40757, 40760, 40761, 40777, 40778, 40779, 40780, 40781, 40782, 40784, 40801]

let litomericeUK = [41002, 41101, 41103, 41108, 41111, 41112, 41113, 41114, 41115, 41116, 41117, 41118, 41119, 41120, 41121, 41131, 41132, 41133, 41141, 41142, 41145, 41146, 41147, 41148, 41155, 41156, 41162, 41164, 41171, 41172, 41173, 41174, 41181, 41182, 41183, 41184, 41185, 41186, 41187, 41201, 41301]

let tepliceUK = [41501, 41503, 41510, 41701, 41702, 41703, 41704, 41705, 41712, 41713, 41722, 41723, 41724, 41725, 41731, 41741, 41742, 41752, 41753, 41754, 41757, 41761, 41762, 41763, 41765, 41771, 41772, 41781, 41801, 41804, 41901]

let chomutovUK = [43001, 43003, 43004, 43005, 43101, 43102, 43111, 43114, 43115, 43121, 43132, 43141, 43143, 43144, 43145, 43151, 43153, 43154, 43155, 43156, 43157, 43158, 43159, 43163, 43182, 43183, 43184, 43186, 43191, 43201]

let mostUK = [43526, 43522, 43547, 43601, 43501, 43546, 43543, 43603, 43542, 43511, 43533, 43524, 43532, 43513, 43502, 43545, 43521, 43401]

let lounyUK = [43801, 43901, 43902, 43903, 43904, 43905, 43906, 43907, 43908, 43909, 43914, 43915, 43921, 43922, 43923, 43924, 43926, 43931, 43942, 43949, 43963, 43965, 43967, 43968, 43969, 43971, 43972, 43975, 43981, 43982, 43983, 43984, 43985, 43986, 43987, 43988, 44001, 44101]

// ÚSTECKÝ KRAJ - 40 - 44
// LIBERECKÝ KRAJ - 46 - 51

let liberecLBK = [46001, 46002, 46005, 46006, 46007, 46008, 46010, 46014, 46015, 46303, 46311, 46312, 46331, 46334, 46342, 46343, 46344, 46345, 46346, 46348, 46352, 46353, 46362, 46365, 46373, 46401, 47125]

let jablonecNadNisouLBK = [46601, 46602, 46604, 46605, 46606, 46801, 46802, 46803, 46804, 46811, 46812, 46821, 46822, 46824, 46825, 46826, 46827, 46832, 46833, 46841, 46843, 46844, 46845, 46846, 46847, 46848, 46849, 46850, 46851, 46861, 46871]

let ceskaLipaLBK = [47001, 47002, 47006, 47101, 47102, 47103, 47104, 47105, 47106, 47107, 47108, 47111, 47112, 47113, 47114, 47115, 47116, 47117, 47118, 47121, 47123, 47124,47126, 47127, 47128, 47129, 47141, 47151, 47152, 47153, 47154, 47155, 47156, 47157, 47158, 47161, 47162, 47163, 47167, 47201, 47301]

let semilyLBK = [51101, 51201, 51202, 51203, 51204, 51206, 51211, 51212, 51213, 51231, 51232, 51233, 51234, 51235, 51236, 51237, 51238, 51241, 51242, 51243, 51244, 51245, 51246, 51247, 51251, 51252, 51253, 51261, 51263, 51264, 51265, 51271, 51301, 51401]

// LIBERECKÝ KRAJ - 46 - 51
// KRÁLOVÉHRADECKÝ KRAJ - 50 - 55

let hradecKraloveKHK = [50002, 50003, 50004, 50006, 50008, 50009, 50011, 50012, 50301, 50302, 50303, 50304, 50305, 50306, 50311, 50312, 50313, 50314, 50315, 50316, 50321, 50322, 50323, 50324, 50325, 50326, 50327, 50331, 50332, 50333, 50341, 50343, 50344, 50346, 50351, 50352, 50353, 50354, 50355, 50356, 50357, 50361, 50362, 50363, 50364, 50365, 50366, 50401, 51772]

let jicinKHK = [50601, 50702, 50703, 50704, 50705, 50706, 50707, 50711, 50712, 50713, 50715, 50721, 50722, 50723, 50724, 50731, 50732, 50733, 50734, 50742, 50743, 50744, 50745, 50752, 50753, 50754, 50758, 50759, 50771, 50773, 50777, 50781, 50782, 50791, 50792, 50801, 50901]

let rychnovNadKneznouKHK = [51601, 51603, 51701, 51702, 51703, 51704, 51711, 51712, 51721, 51722, 51723, 51724, 51725, 51731, 51732, 51733, 51734, 51735, 51736, 51741, 51742, 51743, 51745, 51750, 51754, 51755, 51756, 51757, 51761, 51764, 51771, 51773, 51783, 51784, 51791, 51792, 51793, 51801, 51803]

let trutnovKHK = [54101, 54102, 54103, 54201, 54203, 54204, 54211, 54212, 54213, 54221, 54223, 54224, 54225, 54226, 54227, 54232, 54233, 54234, 54235, 54236, 54237, 54238, 54241, 54242, 54243, 54301, 54302, 54303, 54341, 54342, 54344, 54351, 54352, 54361, 54362, 54371, 54372, 54373, 54374, 54375, 54376, 54377, 54401, 54404, 54442, 54443, 54451, 54452, 54454, 54455, 54456, 54461, 54462, 54464, 54466, 54472, 54474, 54475, 54477]

let nachodKHK = [54701,54901,54906,54907,54908,54911,54912,54921,54922,54923,54931,54932,54934,54936,54937,54941,54946,54947,54948,54952,54954,54955,54956,54957,54962,54963,54964,54971,54972,54973,54974,54981,54982,54983,54984,55001,55101,55102,55201,55203,55204,55205,55211,55212,55221,55222,55224,55225]

// KRÁLOVÉHRADECKÝ KRAJ - 50 - 55
// PARDUBICKÝ KRAJ - 53 - 57

let pardubicePDK = [53002, 53003, 53006, 53009, 53012, 53301, 53303, 53304, 53305, 53311, 53312, 53313, 53314, 53315, 53316, 53321, 53322, 53332, 53333, 53341, 53342, 53343, 53344, 53345, 53351, 53352, 53353, 53354, 53361, 53362, 53363, 53364, 53371, 53372, 53373, 53374, 53375, 53401, 53501]

let chrudimPDK = [53701, 53703, 53705, 53801, 53802, 53803, 53804, 53805, 53807, 53821, 53823, 53824, 53825, 53826, 53831, 53832, 53833, 53834, 53835, 53836, 53841, 53842, 53843, 53845, 53851, 53854, 53861, 53862, 53863, 53864, 53901, 53941, 53942, 53943, 53944, 53952, 53953, 53955, 53956, 53957, 53961, 53962, 53971, 53972, 53973, 53974, 53976]

let ustiNadOrliciPDK = [53865, 53945, 56002, 56101, 56102, 56112, 56113, 56114, 56115, 56116, 56117, 56122, 56123, 56124, 56125, 56131, 56132, 56133, 56134, 56141, 56151, 56152, 56153, 56154, 56155, 56156, 56161, 56162, 56163, 56164, 56165, 56166, 56167, 56168, 56169, 56170, 56181, 56182, 56184, 56185, 56186, 56201, 56203, 56204, 56206, 56301, 56401, 56501, 56542, 56543, 56544, 56552, 56555, 56601]

let svitavyPDK = [56118, 56553, 56802, 56901, 56902, 56903, 56904, 56905, 56906, 56907, 56911, 56912, 56914, 56921, 56922, 56923, 56924, 56932, 56933, 56934, 56935, 56941, 56942, 56943, 56944, 56946, 56951, 56953, 56955, 56956, 56957, 56961, 56962, 56963, 56965, 56966, 56967, 56971, 56972, 56973, 56974, 56982, 56991, 56992, 56993, 56994, 56995, 57001, 57101, 57201]

// PARDUBICKÝ KRAJ - 53 - 57
// KRAJ VYSOČINA - (39) - 58 - 59 - (67)
let pelhrimovKV = [39301, 39401, 39403, 39404, 39405, 39409, 39411, 39412, 39413, 39414, 39415, 39421, 39422, 39424, 39426, 39427, 39428, 39443, 39444, 39445, 39446, 39451, 39452, 39456, 39459, 39461, 39462, 39463, 39464, 39468, 39470, 39491, 39492, 39493, 39494, 39495, 39496, 39501, 39601]

let havlickuvBrodKV = [58001, 58221, 58222, 58223, 58224, 58231, 58232, 58233, 58234, 58235, 58241, 58242, 58243, 58244, 58245, 58251, 58252, 58253, 58254, 58255, 58256, 58257, 58261, 58262, 58263, 58264, 58265, 58266, 58271, 58272, 58273, 58274, 58276, 58277, 58281, 58282, 58283, 58286, 58287, 58291, 58292, 58293, 58294, 58301, 58401]

let jihlavaKV = [58601, 58602, 58603, 58605, 58606, 58617, 58801, 58805, 58811, 58812, 58813, 58821, 58822, 58823, 58824, 58825, 58826, 58827, 58831, 58832, 58833, 58834, 58835, 58841, 58842, 58844, 58845, 58851, 58852, 58854, 58856, 58861, 58862, 58864, 58865, 58866, 58867, 58901, 67529]

let zdarNadSazavouKV = [59101, 59102, 59201, 59202, 59203, 59204, 59211, 59212, 59213, 59214, 59221, 59222, 59231, 59232, 59233, 59241, 59242, 59244, 59245, 59251, 59252, 59253, 59254, 59255, 59256, 59257, 59263, 59264, 59265, 59266, 59301, 59401, 59441, 59442, 59444, 59445, 59451, 59452, 59453, 59454, 59457, 59458, 59461, 59501, 67579]

let trebicKV = [67401, 67501, 67502, 67503, 67504, 67505, 67506, 67507, 67508, 67521, 67522, 67523, 67524, 67525, 67526, 67527, 67528, 67531, 67532, 67533, 67534, 67541, 67542, 67543, 67544, 67545, 67550, 67551, 67552, 67553, 67554, 67555, 67556, 67557, 67559, 67560, 67571, 67573, 67574, 67575, 67576, 67577, 67578, 67602]

// KRAJ VYSOČINA - (39) - 58 - 59 - (67)
// JIHOMORAVSKÝ KRAJ  - 60 - 69

let brnoMestoJMK = [60200, 60300, 61200, 61300, 61400, 61500, 61600, 61700, 61800, 61900, 62000, 62100, 62200, 62300, 62400, 62500, 62700, 62800, 63400, 63500, 63600, 63700, 63800, 63900, 64100, 64200, 64300, 64400, 64700, 65100]

let brnoVenkovJMK = [59261, 59262, 59455, 59456, 66401, 66402, 66403, 66404, 66405, 66406, 66407, 66408, 66411, 66412, 66417, 66423, 66424, 66431, 66432, 66434, 66441, 66442, 66443, 66444, 66446, 66447, 66448, 66449, 66451, 66452, 66453, 66454, 66455, 66456, 66457, 66458, 66459, 66461, 66462, 66463, 66464, 66465, 66466, 66467, 66471, 66475, 66481, 66482, 66483, 66484, 66491, 66501, 66601, 66602, 66603, 66701, 67177, 67923, 67924, 69122, 69123, 69124, 69125, 69130, 69164]

let znojmoJMK = [66902, 66904, 67101, 67102, 67103, 67106, 67107, 67110, 67122, 67124, 67125, 67126, 67127, 67128, 67129, 67131, 67132, 67133, 67134, 67138, 67139, 67140, 67142, 67151, 67152, 67153, 67154, 67155, 67156, 67161, 67162, 67163, 67164, 67165, 67167, 67168, 67169, 67171, 67172, 67173, 67175, 67176, 67178, 67181, 67182, 67201]

let blanskoJMK = [67801, 67901, 67902, 67903, 67904, 67905, 67906, 67907, 67911, 67913, 67914, 67915, 67921, 67922, 67931, 67932, 67933, 67934, 67935, 67936, 67937, 67938, 67939, 67951, 67952, 67953, 67961, 67962, 67963, 67971, 67972, 67973, 67974, 67975, 67976, 68001]

let vyskovJMK = [68201, 68301, 68303, 68304, 68305, 68308, 68321, 68323, 68333, 68334, 68335, 68341, 68351, 68352, 68354, 68401, 68501]
 
let breclavJMK = [69002, 69003, 69006, 69007, 69101, 69102, 69103, 69104, 69105, 69106, 69107, 69108, 69109, 69110, 69111, 69112, 69121, 69126, 69127, 69129, 69141, 69142, 69143, 69144, 69145, 69146, 69151, 69152, 69153, 69154, 69155, 69156, 69162, 69163, 69165, 69167, 69168, 69171, 69172, 69173, 69174, 69175, 69176, 69181, 69182, 69183, 69185, 69186, 69188, 69189, 69201, 69301]

let hodoninJMK = [69501, 69601, 69602, 69603, 69604, 69605, 69606, 69611, 69612, 69613, 69614, 69615, 69616, 69617, 69618, 69619, 69621, 69631, 69632, 69633, 69634, 69635, 69636, 69637, 69638, 69639, 69641, 69642, 69647, 69648, 69649, 69650, 69651, 69655, 69661, 69662, 69663, 69664, 69665, 69666, 69667, 69671, 69672, 69673, 69674, 69675, 69676, 69681, 69683, 69684, 69685, 69701, 69801]

// JIHOMORAVSKÝ KRAJ - 60 - 69
// MORAVSKOSLEZSKÝ KRAJ - 70 - 74 - (79)

let ostravaMSK = [70030, 70200, 70300, 70800, 70900, 71000, 71100, 71200, 71300, 71500, 71600, 71700, 71800, 71900, 72000, 72100, 72200, 72300, 72400, 72525, 72526, 72527, 72528, 72529, 73923, 73932, 73934, 74283, 74285, 74764, 74766]

let karvinaMSK = [73301, 73401, 73503, 73506, 73511, 73514, 73531, 73532, 73533, 73534, 73535, 73541, 73542, 73543, 73551, 73552, 73553, 73561, 73562, 73564, 73571, 73572, 73581, 73601, 73701, 73937]


let frydekMistekMSK = [73801, 73901, 73904, 73911, 73912, 73913, 73914, 73915, 73921, 73924, 73925, 73936, 73938, 73939, 73941, 73942, 73943, 73944, 73945, 73946, 73947, 73949, 73951, 73953, 73955, 73959, 73961, 73981, 73984, 73985, 73991, 73992, 73993, 73994, 73995, 73997, 73998]

let novyJicinMSK = [74101, 74201, 74213, 74221, 74231, 74233, 74235, 74236, 74237, 74242, 74243, 74245, 74247, 74251, 74253, 74254, 74255, 74256, 74257, 74258, 74260, 74265, 74266, 74267, 74271, 74272, 74273, 74274, 74275, 74281, 74282, 74291, 74292, 74293, 74301, 74401]

let opavaMSK = [74601, 74705, 74706, 74707, 74711, 74714, 74715, 74716, 74717, 74718, 74719, 74720, 74721, 74722, 74723, 74724, 74725, 74727, 74728, 74731, 74733, 74735, 74741, 74743, 74744, 74745, 74747, 74751, 74752, 74753, 74754, 74755, 74756, 74757, 74761, 74762, 74763, 74767, 74768, 74769, 74770, 74771, 74773, 74774, 74775, 74781, 74782, 74784, 74786, 74787, 74791, 74792, 74794, 74795, 74801, 74901]

let bruntalMSK = [79201, 79302, 79303, 79312, 79315, 79316, 79323, 79324, 79326, 79331, 79336, 79342, 79344, 79351, 79356, 79368, 79371, 79374, 79382, 79383, 79384, 79391, 79393, 79395, 79397, 79399, 79401, 79501]

// MORAVSKOSLEZSKÝ KRAJ - 70 - 74 - (79)
// ZLÍNSKÝ KRAJ - (68) - 75 - 76

let uherskeHradisteZK = [68601, 68603, 68604, 68605, 68606, 68609, 68703, 68704, 68705, 68706, 68707, 68708, 68709, 68710, 68711, 68712, 68713, 68722, 68723, 68724, 68725, 68731, 68732, 68733, 68734, 68737, 68738, 68741, 68742, 68751, 68752, 68753, 68754, 68755, 68756, 68761, 68762, 68763, 68764, 68765, 68766, 68767, 68771, 68774, 68801]

let vsetinZK = [75501, 75601, 75602, 75603, 75604, 75605, 75606, 75607, 75611, 75612, 75614, 75615, 75621, 75622, 75623, 75624, 75625, 75627, 75631, 75641, 75642, 75643, 75644, 75645, 75651, 75652, 75653, 75654, 75655, 75656, 75657, 75661, 75662, 75663, 75701]

let zlinZK = [76001, 76005, 76301, 76302, 76307, 76310, 76311, 76312, 76313, 76314, 76315, 76316, 76317, 76318, 76319, 76321, 76323, 76324, 76325, 76326, 76331, 76332, 76333, 76334, 76341, 76345, 76351, 76361, 76362, 76363, 76364, 76502, 76601]

let kromerizZK = [76701, 76801, 76802, 76803, 76804, 76805, 76811, 76812, 76813, 76821, 76823, 76824, 76831, 76832, 76833, 76834, 76841, 76842, 76843, 76845, 76852, 76861, 76871, 76872, 76875, 76901]


// ZLÍNSKÝ KRAJ - (68) - 75 - 76
// OLOMOUCKÝ KRAJ - (75) - 77 - 79

let prerovOK = [75002, 75101, 75102, 75103, 75104, 75105, 75111, 75114, 75115, 75116, 75117, 75118, 75119, 75121, 75122, 75123, 75124, 75125, 75127, 75131, 75144, 75201, 75301, 75352, 75353, 75354, 75355, 75356, 75361, 75362, 75363, 75364, 75366, 75367, 75368]

let olomoucOK = [77200, 77700, 77900, 78301, 78305, 78306, 78307, 78313, 78314, 78316, 78321, 78322, 78324, 78325, 78332, 78333, 78335, 78336, 78342, 78344, 78345, 78346, 78347, 78349, 78351, 78353, 78354, 78355, 78356, 78357, 78361, 78365, 78372, 78373, 78375, 78382, 78383, 78385, 78386, 78391, 78396, 78397, 78401, 78501, 79305]

let sumperkOK = [78701, 78801, 78803, 78804, 78805, 78811, 78813, 78814, 78815, 78816, 78820, 78821, 78823, 78832, 78833, 78901, 78961, 78962, 78963, 78964, 78969, 78971, 78972, 78973, 78974, 78975, 78982, 78983, 78985, 78991]

let jesenikkOK = [78825, 79001, 79051, 79052, 79053, 79054, 79055, 79057, 79058, 79061, 79063, 79064, 79065, 79066, 79069, 79070, 79081, 79082, 79084, 79376]

let prostejovOK = [79601, 79603, 79604, 79607, 79802, 79803, 79804, 79805, 79806, 79807, 79808, 79809, 79811, 79812, 79813, 79814, 79816, 79817, 79821, 79823, 79824, 79825, 79826, 79827, 79828, 79829, 79830, 79841, 79842, 79843, 79844, 79845, 79846, 79847, 79848, 79849, 79851, 79852, 79853, 79854, 79855, 79856, 79857, 79858, 79861, 79862]

// OLOMOUCKÝ KRAJ


const valid = document.querySelector("#odpoved")




const isValidZipCodePhase2 = (zip) => {
    
    let psc = String(zip)
    let cut = psc.slice(0, 2)
    

    if(cut >= 10 && cut <= 19){
        valid.classList.add("valid")
        if(String(prahaMesto).includes(zip)){
            return  valid.innerHTML += "Platné poštovní směrovací číslo pro okres Praha-město."
        } else {
            valid.classList.add("invalid")
            return valid.textContent = "Zadané PSČ není platné."
        }
    } else if(cut >= 25 && cut <= 29){
        valid.classList.add("valid")
        if(String(prahaVychodSCK).includes(zip)){
            return valid.innerHTML += "Platné poštovní směrovací číslo pro okres Praha-východ ve Středočeském kraji."
        } else if (String(prahaZapadSCK).includes(zip)){
            return valid.innerHTML += "Platné poštovní směrovací číslo pro okres Praha-západ ve Středočeském kraji."
        }else if (kolinSCK.includes(zip)){
            return valid.innerHTML += "Platné poštovní směrovací číslo pro okres Kolín ve Středočeském kraji."
        }else if (String(berounSCK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Beroun ve Středočeském kraji."
        } else if (String(kladnoSCK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Kladno ve Středočeském kraji."
        }else if (String(melnikSCK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Mělník ve Středočeském kraji."
        } else if (String(benesovSCK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Benešov ve Středočeském kraji."
        } else if (String(nymburkSCK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Nymburk ve Středočeském kraji."
        } else if (String(pribramSCK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Příbram ve Středočeském kraji."
        }else if (String(rakovnikSCK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Rakovník ve Středočeském kraji."
        }else if (String(kutnaHoraSCK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Kutná Hora ve Středočeském kraji."
        } 
    } else if(cut >= 30 && cut <= 34){
        valid.classList.add("valid")
        if(String(plzenMestoPK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Plzeň-město v Plzěnském kraji."
        }else if(String(plzenSeverPK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Plzeň-sever v Plzěnském kraji."
        }else if(String(plzenJihPK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Plzeň-jih v Plzěnském kraji."
        }else if(String(rokycanyPK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Rokycany v Plzěnském kraji."
        }else if(String(tachovPK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Tachov v Plzěnském kraji."
        }else if(String(domazlicePK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Domažlice v Plzěnském kraji."
        }else if(String(klatovyPK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Klatovy v Plzěnském kraji."
        }
    } else if(cut === 35 || cut === 36){
        valid.classList.add("valid")
        if(String(karlovyVaryKVK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Karlovy Vary v Karlovarském kraji."
        } else if(String(chebKVK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Cheb v Karlovarském kraji."
        } else if(String(sokolovKVK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Sokolov v Karlovarském kraji."
        }
    } else if(cut >= 37 && cut <= 39){
        valid.classList.add("valid")
        if(String(jindrichuvHradecJCK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Jindřichův Hradec v Jihočeském kraji"
        } else if (String(ceskeBudejoviceJCK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres České Budějovice v Jihočeském kraji"
        }else if (String(ceskyKrumlovJCK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Český Krumlov v Jihočeském kraji"
        }else if (String(ceskyKrumlovJCK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Prachatice v Jihočeském kraji"
        }else if (String(strakoniceJCK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Strakonice v Jihočeském kraji"
        }else if (String(pisekJCK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Písek v Jihočeském kraji"
        }else if (String(taborJCK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Tábor v Jihočeském kraji"
        }
    } else if(cut >= 40 && cut <= 44){
        valid.classList.add("valid")
        if(String(mostUK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Most v Ústeckém kraji"
        } else if(String(decinUK).includes(zip)){
            return "Platné poštovní směrovací číslo pro okres Děčín v Ústeckém kraji"
        } else if(String(lounyUK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Louny v Ústeckém kraji"
        } else if(String(tepliceUK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Teplice v Ústeckém kraji"
        } else if(String(chomutovUK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Chomutov v Ústeckém kraji"
        } else if(String(litomericeUK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Litoměřice v Ústeckém kraji"
        } else if(String(ustiNadLabemUK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Ustí nad Labem v Ústeckém kraji"
        }
    } else if(cut === 46 || cut === 47 || cut === 51){
        valid.classList.add("valid")
        if(String(semilyLBK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Semily v Libereckém kraji."
        } else if(String(liberecLBK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Liberec v Libereckém kraji."
        } else if(String(ceskaLipaLBK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Česká Lípa v Libereckém kraji."
        } else if(String(jablonecNadNisouLBK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Jablonec nad Nisou v Libereckém kraji."
        }
        
    } else if(cut === 50 || cut === 51 || cut === 54 || cut === 55){
        valid.classList.add("valid")
        if(String(jicinKHK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Jičín v Královéhradeckém kraji."
        } else if(String(trutnovKHK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Trutnov v Královéhradeckém kraji."
        } else if(String(nachodKHK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Náchod v Královéhradeckém kraji."
        } else if(String(hradecKraloveKHK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Hradec Králové v Královéhradeckém kraji."
        } else if(String(rychnovNadKneznouKHK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Rychnov nad Kněžnou v Královéhradeckém kraji."
        }
    } else if (cut === 53 || cut === 56 || cut === 57 ){
        valid.classList.add("valid")
        if(String(pardubicePDK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Pardubice v Pardubickém kraji."
        } else if(String(chrudimPDK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Chrudim v Pardubickém kraji."
        } else if(String(ustiNadOrliciPDK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Ustí nad Orlicí v Pardubickém kraji."
        } else if(String(svitavyPDK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Svitavy v Pardubickém kraji."
        }
    } else if(cut === 58 || cut === 59) {
        valid.classList.add("valid")
        if(String(pelhrimovKV).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Pelhřimov v Kraji Vysošina."
        } else if(String(havlickuvBrodKV).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Havlíčkův Brod v Kraji Vysošina."
        } else if(String(zdarNadSazavouKV).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Žďár nad Sázavou v Kraji Vysošina."
        } else if(String(jihlavaKV).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Jihlava v Kraji Vysošina."
        } else if(strakoniceJCK(trebicKV).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Třebíč v Kraji Vysošina."
        }
    } else if((cut >= 60 && cut <= 64) || cut === 66 || cut === 67 || cut === 69 ) {
        valid.classList.add("valid")
        if(String(brnoMestoJMK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Brno-město v Jihomoravském kraji."
        } else if(String(brnoVenkovJMK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Brno-venkov v Jihomoravském kraji."
        } else if(String(blanskoJMK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Blasnsko v Jihomoravském kraji."
        } else if(String(vyskovJMK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Vyškov v Jihomoravském kraji."
        } else if(String(hodoninJMK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Hodonín v Jihomoravském kraji."
        }else if(String(breclavJMK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Břeclav v Jihomoravském kraji."
        }else if(String(znojmoJMK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Znojmo v Jihomoravském kraji."
        }
        
    } else if(cut === 68 || cut === 75 || cut === 76) {
        valid.classList.add("valid")
        if(String(vsetinZK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Vsetín v Zlínském kraji."
        } else if(String(zlinZK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Zlín v Zlínském kraji."
        } else if(String(kromerizZK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Kroměříž v Zlínském kraji."
        } else if(String(uherskeHradisteZK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Uherské Hradiště v Zlínském kraji."
        }
    } else if(cut >= 70 && cut <= 74){
        valid.classList.add("valid")
        if(String(ostravaMSK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Ostrava v Moravskoslezkém kraji."
        } else if(String(frydekMistekMSK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Frýdek Místek v Moravskoslezkém kraji."
        } else if(String(novyJicinMSK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Nový Jičín v Moravskoslezkém kraji."
        } else if(String(karvinaMSK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Karviná v Moravskoslezkém kraji."
        } else if(String(opavaMSK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Opava v Moravskoslezkém kraji."
        } else if(String(bruntalMSK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Bruntál v Moravskoslezkém kraji."
        }
    }else if(cut >= 77 && cut <= 79){
        valid.classList.add("valid")
        if(String(olomoucOK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Olomouc v Olomouckém kraji."
        } else if(String(prerovOK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Přerov v Olomouckém kraji."
        } else if(String(prostejovOK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Prostějov v Olomouckém kraji."
        } else if(String(sumperkOK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Šumperk v Olomouckém kraji."
        } else if(String(jesenikkOK).includes(zip)){
            return valid.innerHTML = "Platné poštovní směrovací číslo pro okres Jeseník v Olomouckém kraji."
        }
    } else {
        valid.classList.add("invalid")
        return valid.textContent = "Zadané PSČ není platné."
    }
} 

const isValidZipCodePhase1 = (zip, lengthOfZip) => {
    

    const delka = String(zip).trim()
    if(delka.length <= 4){
        valid.classList.add("invalid")
        return valid.innerHTML += "PSČ musí mít 5 číslic."
    } else if(delka.length > 6){
        return valid.innerHTML +=  "PSČ může mít pouze 5 číslic."
    } else if(delka.length === 6){
        if(delka.indexOf(" ") === 3){
            let string1 = String(delka).slice(0, 3)
            let string2 = String(delka).slice(4, 6)
            let string3 = string1 + string2
            
            return lengthOfZip(string3)
            
        } else{
            valid.classList.add("invalid")
            return valid.innerHTML +=  "Zkuste to znova, špatně zadané znaky."
        }
    }  else if(delka.length === 5){
        
        return lengthOfZip(zip)
    }
}

/* const psc = prompt("Zadej poštovní směrovací číslo:").trim() */ 



const numberInput = document.getElementById('input');
const submitButton = document.getElementById('btn');

submitButton.addEventListener('click', () => {
    const enteredNumber = numberInput.value
    isValidZipCodePhase1(enteredNumber, isValidZipCodePhase2);
});

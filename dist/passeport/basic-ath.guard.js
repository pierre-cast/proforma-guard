"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicGuard = void 0;
const passport_1 = require("@nestjs/passport");
class BasicGuard extends passport_1.AuthGuard('basic') {
}
exports.BasicGuard = BasicGuard;
//# sourceMappingURL=basic-ath.guard.js.map
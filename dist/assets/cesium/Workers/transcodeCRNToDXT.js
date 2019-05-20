/**
 * Cesium - https://github.com/AnalyticalGraphicsInc/cesium
 *
 * Copyright 2011-2017 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md for full licensing details.
 */
/**
 * @licence
 * crunch/crnlib uses the ZLIB license:
 * http://opensource.org/licenses/Zlib
 *
 * Copyright (c) 2010-2016 Richard Geldreich, Jr. and Binomial LLC
 *
 * This software is provided 'as-is', without any express or implied
 * warranty.  In no event will the authors be held liable for any damages
 * arising from the use of this software.
 *
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 *
 * 1. The origin of this software must not be misrepresented; you must not
 * claim that you wrote the original software. If you use this software
 * in a product, an acknowledgment in the product documentation would be
 * appreciated but is not required.
 *
 * 2. Altered source versions must be plainly marked as such, and must not be
 * misrepresented as being the original software.
 *
 * 3. This notice may not be removed or altered from any source distribution.
 */

/**
  @license
  when.js - https://github.com/cujojs/when

  MIT License (c) copyright B Cavalier & J Hann

 * A lightweight CommonJS Promises/A and when() implementation
 * when is part of the cujo.js family of libraries (http://cujojs.com/)
 *
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @version 1.7.1
 */

/**
 * @license
 *
 * Copyright (c) 2014, Brandon Jones. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation
 *  and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

!(function() {
    define("Core/defined", [], function() {
        "use strict";
        function e(e) {
            return void 0 !== e && null !== e;
        }
        return e;
    }),
        define("Core/defineProperties", ["./defined"], function(e) {
            "use strict";
            var r = (function() {
                    try {
                        return "x" in Object.defineProperty({}, "x", {});
                    } catch (e) {
                        return !1;
                    }
                })(),
                n = Object.defineProperties;
            return (
                (r && e(n)) ||
                    (n = function(e) {
                        return e;
                    }),
                n
            );
        }),
        define("Core/CompressedTextureBuffer", ["./defined", "./defineProperties"], function(e, r) {
            "use strict";
            function n(e, r, n, t) {
                (this._format = e), (this._width = r), (this._height = n), (this._buffer = t);
            }
            return (
                r(n.prototype, {
                    internalFormat: {
                        get: function() {
                            return this._format;
                        }
                    },
                    width: {
                        get: function() {
                            return this._width;
                        }
                    },
                    height: {
                        get: function() {
                            return this._height;
                        }
                    },
                    bufferView: {
                        get: function() {
                            return this._buffer;
                        }
                    }
                }),
                (n.clone = function(r) {
                    if (e(r)) return new n(r._format, r._width, r._height, r._buffer);
                }),
                (n.prototype.clone = function() {
                    return n.clone(this);
                }),
                n
            );
        }),
        define("Core/freezeObject", ["./defined"], function(e) {
            "use strict";
            var r = Object.freeze;
            return (
                e(r) ||
                    (r = function(e) {
                        return e;
                    }),
                r
            );
        }),
        define("Core/WebGLConstants", ["./freezeObject"], function(e) {
            "use strict";
            return e({
                DEPTH_BUFFER_BIT: 256,
                STENCIL_BUFFER_BIT: 1024,
                COLOR_BUFFER_BIT: 16384,
                POINTS: 0,
                LINES: 1,
                LINE_LOOP: 2,
                LINE_STRIP: 3,
                TRIANGLES: 4,
                TRIANGLE_STRIP: 5,
                TRIANGLE_FAN: 6,
                ZERO: 0,
                ONE: 1,
                SRC_COLOR: 768,
                ONE_MINUS_SRC_COLOR: 769,
                SRC_ALPHA: 770,
                ONE_MINUS_SRC_ALPHA: 771,
                DST_ALPHA: 772,
                ONE_MINUS_DST_ALPHA: 773,
                DST_COLOR: 774,
                ONE_MINUS_DST_COLOR: 775,
                SRC_ALPHA_SATURATE: 776,
                FUNC_ADD: 32774,
                BLEND_EQUATION: 32777,
                BLEND_EQUATION_RGB: 32777,
                BLEND_EQUATION_ALPHA: 34877,
                FUNC_SUBTRACT: 32778,
                FUNC_REVERSE_SUBTRACT: 32779,
                BLEND_DST_RGB: 32968,
                BLEND_SRC_RGB: 32969,
                BLEND_DST_ALPHA: 32970,
                BLEND_SRC_ALPHA: 32971,
                CONSTANT_COLOR: 32769,
                ONE_MINUS_CONSTANT_COLOR: 32770,
                CONSTANT_ALPHA: 32771,
                ONE_MINUS_CONSTANT_ALPHA: 32772,
                BLEND_COLOR: 32773,
                ARRAY_BUFFER: 34962,
                ELEMENT_ARRAY_BUFFER: 34963,
                ARRAY_BUFFER_BINDING: 34964,
                ELEMENT_ARRAY_BUFFER_BINDING: 34965,
                STREAM_DRAW: 35040,
                STATIC_DRAW: 35044,
                DYNAMIC_DRAW: 35048,
                BUFFER_SIZE: 34660,
                BUFFER_USAGE: 34661,
                CURRENT_VERTEX_ATTRIB: 34342,
                FRONT: 1028,
                BACK: 1029,
                FRONT_AND_BACK: 1032,
                CULL_FACE: 2884,
                BLEND: 3042,
                DITHER: 3024,
                STENCIL_TEST: 2960,
                DEPTH_TEST: 2929,
                SCISSOR_TEST: 3089,
                POLYGON_OFFSET_FILL: 32823,
                SAMPLE_ALPHA_TO_COVERAGE: 32926,
                SAMPLE_COVERAGE: 32928,
                NO_ERROR: 0,
                INVALID_ENUM: 1280,
                INVALID_VALUE: 1281,
                INVALID_OPERATION: 1282,
                OUT_OF_MEMORY: 1285,
                CW: 2304,
                CCW: 2305,
                LINE_WIDTH: 2849,
                ALIASED_POINT_SIZE_RANGE: 33901,
                ALIASED_LINE_WIDTH_RANGE: 33902,
                CULL_FACE_MODE: 2885,
                FRONT_FACE: 2886,
                DEPTH_RANGE: 2928,
                DEPTH_WRITEMASK: 2930,
                DEPTH_CLEAR_VALUE: 2931,
                DEPTH_FUNC: 2932,
                STENCIL_CLEAR_VALUE: 2961,
                STENCIL_FUNC: 2962,
                STENCIL_FAIL: 2964,
                STENCIL_PASS_DEPTH_FAIL: 2965,
                STENCIL_PASS_DEPTH_PASS: 2966,
                STENCIL_REF: 2967,
                STENCIL_VALUE_MASK: 2963,
                STENCIL_WRITEMASK: 2968,
                STENCIL_BACK_FUNC: 34816,
                STENCIL_BACK_FAIL: 34817,
                STENCIL_BACK_PASS_DEPTH_FAIL: 34818,
                STENCIL_BACK_PASS_DEPTH_PASS: 34819,
                STENCIL_BACK_REF: 36003,
                STENCIL_BACK_VALUE_MASK: 36004,
                STENCIL_BACK_WRITEMASK: 36005,
                VIEWPORT: 2978,
                SCISSOR_BOX: 3088,
                COLOR_CLEAR_VALUE: 3106,
                COLOR_WRITEMASK: 3107,
                UNPACK_ALIGNMENT: 3317,
                PACK_ALIGNMENT: 3333,
                MAX_TEXTURE_SIZE: 3379,
                MAX_VIEWPORT_DIMS: 3386,
                SUBPIXEL_BITS: 3408,
                RED_BITS: 3410,
                GREEN_BITS: 3411,
                BLUE_BITS: 3412,
                ALPHA_BITS: 3413,
                DEPTH_BITS: 3414,
                STENCIL_BITS: 3415,
                POLYGON_OFFSET_UNITS: 10752,
                POLYGON_OFFSET_FACTOR: 32824,
                TEXTURE_BINDING_2D: 32873,
                SAMPLE_BUFFERS: 32936,
                SAMPLES: 32937,
                SAMPLE_COVERAGE_VALUE: 32938,
                SAMPLE_COVERAGE_INVERT: 32939,
                COMPRESSED_TEXTURE_FORMATS: 34467,
                DONT_CARE: 4352,
                FASTEST: 4353,
                NICEST: 4354,
                GENERATE_MIPMAP_HINT: 33170,
                BYTE: 5120,
                UNSIGNED_BYTE: 5121,
                SHORT: 5122,
                UNSIGNED_SHORT: 5123,
                INT: 5124,
                UNSIGNED_INT: 5125,
                FLOAT: 5126,
                DEPTH_COMPONENT: 6402,
                ALPHA: 6406,
                RGB: 6407,
                RGBA: 6408,
                LUMINANCE: 6409,
                LUMINANCE_ALPHA: 6410,
                UNSIGNED_SHORT_4_4_4_4: 32819,
                UNSIGNED_SHORT_5_5_5_1: 32820,
                UNSIGNED_SHORT_5_6_5: 33635,
                FRAGMENT_SHADER: 35632,
                VERTEX_SHADER: 35633,
                MAX_VERTEX_ATTRIBS: 34921,
                MAX_VERTEX_UNIFORM_VECTORS: 36347,
                MAX_VARYING_VECTORS: 36348,
                MAX_COMBINED_TEXTURE_IMAGE_UNITS: 35661,
                MAX_VERTEX_TEXTURE_IMAGE_UNITS: 35660,
                MAX_TEXTURE_IMAGE_UNITS: 34930,
                MAX_FRAGMENT_UNIFORM_VECTORS: 36349,
                SHADER_TYPE: 35663,
                DELETE_STATUS: 35712,
                LINK_STATUS: 35714,
                VALIDATE_STATUS: 35715,
                ATTACHED_SHADERS: 35717,
                ACTIVE_UNIFORMS: 35718,
                ACTIVE_ATTRIBUTES: 35721,
                SHADING_LANGUAGE_VERSION: 35724,
                CURRENT_PROGRAM: 35725,
                NEVER: 512,
                LESS: 513,
                EQUAL: 514,
                LEQUAL: 515,
                GREATER: 516,
                NOTEQUAL: 517,
                GEQUAL: 518,
                ALWAYS: 519,
                KEEP: 7680,
                REPLACE: 7681,
                INCR: 7682,
                DECR: 7683,
                INVERT: 5386,
                INCR_WRAP: 34055,
                DECR_WRAP: 34056,
                VENDOR: 7936,
                RENDERER: 7937,
                VERSION: 7938,
                NEAREST: 9728,
                LINEAR: 9729,
                NEAREST_MIPMAP_NEAREST: 9984,
                LINEAR_MIPMAP_NEAREST: 9985,
                NEAREST_MIPMAP_LINEAR: 9986,
                LINEAR_MIPMAP_LINEAR: 9987,
                TEXTURE_MAG_FILTER: 10240,
                TEXTURE_MIN_FILTER: 10241,
                TEXTURE_WRAP_S: 10242,
                TEXTURE_WRAP_T: 10243,
                TEXTURE_2D: 3553,
                TEXTURE: 5890,
                TEXTURE_CUBE_MAP: 34067,
                TEXTURE_BINDING_CUBE_MAP: 34068,
                TEXTURE_CUBE_MAP_POSITIVE_X: 34069,
                TEXTURE_CUBE_MAP_NEGATIVE_X: 34070,
                TEXTURE_CUBE_MAP_POSITIVE_Y: 34071,
                TEXTURE_CUBE_MAP_NEGATIVE_Y: 34072,
                TEXTURE_CUBE_MAP_POSITIVE_Z: 34073,
                TEXTURE_CUBE_MAP_NEGATIVE_Z: 34074,
                MAX_CUBE_MAP_TEXTURE_SIZE: 34076,
                TEXTURE0: 33984,
                TEXTURE1: 33985,
                TEXTURE2: 33986,
                TEXTURE3: 33987,
                TEXTURE4: 33988,
                TEXTURE5: 33989,
                TEXTURE6: 33990,
                TEXTURE7: 33991,
                TEXTURE8: 33992,
                TEXTURE9: 33993,
                TEXTURE10: 33994,
                TEXTURE11: 33995,
                TEXTURE12: 33996,
                TEXTURE13: 33997,
                TEXTURE14: 33998,
                TEXTURE15: 33999,
                TEXTURE16: 34e3,
                TEXTURE17: 34001,
                TEXTURE18: 34002,
                TEXTURE19: 34003,
                TEXTURE20: 34004,
                TEXTURE21: 34005,
                TEXTURE22: 34006,
                TEXTURE23: 34007,
                TEXTURE24: 34008,
                TEXTURE25: 34009,
                TEXTURE26: 34010,
                TEXTURE27: 34011,
                TEXTURE28: 34012,
                TEXTURE29: 34013,
                TEXTURE30: 34014,
                TEXTURE31: 34015,
                ACTIVE_TEXTURE: 34016,
                REPEAT: 10497,
                CLAMP_TO_EDGE: 33071,
                MIRRORED_REPEAT: 33648,
                FLOAT_VEC2: 35664,
                FLOAT_VEC3: 35665,
                FLOAT_VEC4: 35666,
                INT_VEC2: 35667,
                INT_VEC3: 35668,
                INT_VEC4: 35669,
                BOOL: 35670,
                BOOL_VEC2: 35671,
                BOOL_VEC3: 35672,
                BOOL_VEC4: 35673,
                FLOAT_MAT2: 35674,
                FLOAT_MAT3: 35675,
                FLOAT_MAT4: 35676,
                SAMPLER_2D: 35678,
                SAMPLER_CUBE: 35680,
                VERTEX_ATTRIB_ARRAY_ENABLED: 34338,
                VERTEX_ATTRIB_ARRAY_SIZE: 34339,
                VERTEX_ATTRIB_ARRAY_STRIDE: 34340,
                VERTEX_ATTRIB_ARRAY_TYPE: 34341,
                VERTEX_ATTRIB_ARRAY_NORMALIZED: 34922,
                VERTEX_ATTRIB_ARRAY_POINTER: 34373,
                VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 34975,
                IMPLEMENTATION_COLOR_READ_TYPE: 35738,
                IMPLEMENTATION_COLOR_READ_FORMAT: 35739,
                COMPILE_STATUS: 35713,
                LOW_FLOAT: 36336,
                MEDIUM_FLOAT: 36337,
                HIGH_FLOAT: 36338,
                LOW_INT: 36339,
                MEDIUM_INT: 36340,
                HIGH_INT: 36341,
                FRAMEBUFFER: 36160,
                RENDERBUFFER: 36161,
                RGBA4: 32854,
                RGB5_A1: 32855,
                RGB565: 36194,
                DEPTH_COMPONENT16: 33189,
                STENCIL_INDEX: 6401,
                STENCIL_INDEX8: 36168,
                DEPTH_STENCIL: 34041,
                RENDERBUFFER_WIDTH: 36162,
                RENDERBUFFER_HEIGHT: 36163,
                RENDERBUFFER_INTERNAL_FORMAT: 36164,
                RENDERBUFFER_RED_SIZE: 36176,
                RENDERBUFFER_GREEN_SIZE: 36177,
                RENDERBUFFER_BLUE_SIZE: 36178,
                RENDERBUFFER_ALPHA_SIZE: 36179,
                RENDERBUFFER_DEPTH_SIZE: 36180,
                RENDERBUFFER_STENCIL_SIZE: 36181,
                FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 36048,
                FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 36049,
                FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 36050,
                FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 36051,
                COLOR_ATTACHMENT0: 36064,
                DEPTH_ATTACHMENT: 36096,
                STENCIL_ATTACHMENT: 36128,
                DEPTH_STENCIL_ATTACHMENT: 33306,
                NONE: 0,
                FRAMEBUFFER_COMPLETE: 36053,
                FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 36054,
                FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 36055,
                FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 36057,
                FRAMEBUFFER_UNSUPPORTED: 36061,
                FRAMEBUFFER_BINDING: 36006,
                RENDERBUFFER_BINDING: 36007,
                MAX_RENDERBUFFER_SIZE: 34024,
                INVALID_FRAMEBUFFER_OPERATION: 1286,
                UNPACK_FLIP_Y_WEBGL: 37440,
                UNPACK_PREMULTIPLY_ALPHA_WEBGL: 37441,
                CONTEXT_LOST_WEBGL: 37442,
                UNPACK_COLORSPACE_CONVERSION_WEBGL: 37443,
                BROWSER_DEFAULT_WEBGL: 37444,
                COMPRESSED_RGB_S3TC_DXT1_EXT: 33776,
                COMPRESSED_RGBA_S3TC_DXT1_EXT: 33777,
                COMPRESSED_RGBA_S3TC_DXT3_EXT: 33778,
                COMPRESSED_RGBA_S3TC_DXT5_EXT: 33779,
                COMPRESSED_RGB_PVRTC_4BPPV1_IMG: 35840,
                COMPRESSED_RGB_PVRTC_2BPPV1_IMG: 35841,
                COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: 35842,
                COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: 35843,
                COMPRESSED_RGB_ETC1_WEBGL: 36196,
                HALF_FLOAT_OES: 36193,
                DOUBLE: 5130,
                READ_BUFFER: 3074,
                UNPACK_ROW_LENGTH: 3314,
                UNPACK_SKIP_ROWS: 3315,
                UNPACK_SKIP_PIXELS: 3316,
                PACK_ROW_LENGTH: 3330,
                PACK_SKIP_ROWS: 3331,
                PACK_SKIP_PIXELS: 3332,
                COLOR: 6144,
                DEPTH: 6145,
                STENCIL: 6146,
                RED: 6403,
                RGB8: 32849,
                RGBA8: 32856,
                RGB10_A2: 32857,
                TEXTURE_BINDING_3D: 32874,
                UNPACK_SKIP_IMAGES: 32877,
                UNPACK_IMAGE_HEIGHT: 32878,
                TEXTURE_3D: 32879,
                TEXTURE_WRAP_R: 32882,
                MAX_3D_TEXTURE_SIZE: 32883,
                UNSIGNED_INT_2_10_10_10_REV: 33640,
                MAX_ELEMENTS_VERTICES: 33e3,
                MAX_ELEMENTS_INDICES: 33001,
                TEXTURE_MIN_LOD: 33082,
                TEXTURE_MAX_LOD: 33083,
                TEXTURE_BASE_LEVEL: 33084,
                TEXTURE_MAX_LEVEL: 33085,
                MIN: 32775,
                MAX: 32776,
                DEPTH_COMPONENT24: 33190,
                MAX_TEXTURE_LOD_BIAS: 34045,
                TEXTURE_COMPARE_MODE: 34892,
                TEXTURE_COMPARE_FUNC: 34893,
                CURRENT_QUERY: 34917,
                QUERY_RESULT: 34918,
                QUERY_RESULT_AVAILABLE: 34919,
                STREAM_READ: 35041,
                STREAM_COPY: 35042,
                STATIC_READ: 35045,
                STATIC_COPY: 35046,
                DYNAMIC_READ: 35049,
                DYNAMIC_COPY: 35050,
                MAX_DRAW_BUFFERS: 34852,
                DRAW_BUFFER0: 34853,
                DRAW_BUFFER1: 34854,
                DRAW_BUFFER2: 34855,
                DRAW_BUFFER3: 34856,
                DRAW_BUFFER4: 34857,
                DRAW_BUFFER5: 34858,
                DRAW_BUFFER6: 34859,
                DRAW_BUFFER7: 34860,
                DRAW_BUFFER8: 34861,
                DRAW_BUFFER9: 34862,
                DRAW_BUFFER10: 34863,
                DRAW_BUFFER11: 34864,
                DRAW_BUFFER12: 34865,
                DRAW_BUFFER13: 34866,
                DRAW_BUFFER14: 34867,
                DRAW_BUFFER15: 34868,
                MAX_FRAGMENT_UNIFORM_COMPONENTS: 35657,
                MAX_VERTEX_UNIFORM_COMPONENTS: 35658,
                SAMPLER_3D: 35679,
                SAMPLER_2D_SHADOW: 35682,
                FRAGMENT_SHADER_DERIVATIVE_HINT: 35723,
                PIXEL_PACK_BUFFER: 35051,
                PIXEL_UNPACK_BUFFER: 35052,
                PIXEL_PACK_BUFFER_BINDING: 35053,
                PIXEL_UNPACK_BUFFER_BINDING: 35055,
                FLOAT_MAT2x3: 35685,
                FLOAT_MAT2x4: 35686,
                FLOAT_MAT3x2: 35687,
                FLOAT_MAT3x4: 35688,
                FLOAT_MAT4x2: 35689,
                FLOAT_MAT4x3: 35690,
                SRGB: 35904,
                SRGB8: 35905,
                SRGB8_ALPHA8: 35907,
                COMPARE_REF_TO_TEXTURE: 34894,
                RGBA32F: 34836,
                RGB32F: 34837,
                RGBA16F: 34842,
                RGB16F: 34843,
                VERTEX_ATTRIB_ARRAY_INTEGER: 35069,
                MAX_ARRAY_TEXTURE_LAYERS: 35071,
                MIN_PROGRAM_TEXEL_OFFSET: 35076,
                MAX_PROGRAM_TEXEL_OFFSET: 35077,
                MAX_VARYING_COMPONENTS: 35659,
                TEXTURE_2D_ARRAY: 35866,
                TEXTURE_BINDING_2D_ARRAY: 35869,
                R11F_G11F_B10F: 35898,
                UNSIGNED_INT_10F_11F_11F_REV: 35899,
                RGB9_E5: 35901,
                UNSIGNED_INT_5_9_9_9_REV: 35902,
                TRANSFORM_FEEDBACK_BUFFER_MODE: 35967,
                MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: 35968,
                TRANSFORM_FEEDBACK_VARYINGS: 35971,
                TRANSFORM_FEEDBACK_BUFFER_START: 35972,
                TRANSFORM_FEEDBACK_BUFFER_SIZE: 35973,
                TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: 35976,
                RASTERIZER_DISCARD: 35977,
                MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: 35978,
                MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: 35979,
                INTERLEAVED_ATTRIBS: 35980,
                SEPARATE_ATTRIBS: 35981,
                TRANSFORM_FEEDBACK_BUFFER: 35982,
                TRANSFORM_FEEDBACK_BUFFER_BINDING: 35983,
                RGBA32UI: 36208,
                RGB32UI: 36209,
                RGBA16UI: 36214,
                RGB16UI: 36215,
                RGBA8UI: 36220,
                RGB8UI: 36221,
                RGBA32I: 36226,
                RGB32I: 36227,
                RGBA16I: 36232,
                RGB16I: 36233,
                RGBA8I: 36238,
                RGB8I: 36239,
                RED_INTEGER: 36244,
                RGB_INTEGER: 36248,
                RGBA_INTEGER: 36249,
                SAMPLER_2D_ARRAY: 36289,
                SAMPLER_2D_ARRAY_SHADOW: 36292,
                SAMPLER_CUBE_SHADOW: 36293,
                UNSIGNED_INT_VEC2: 36294,
                UNSIGNED_INT_VEC3: 36295,
                UNSIGNED_INT_VEC4: 36296,
                INT_SAMPLER_2D: 36298,
                INT_SAMPLER_3D: 36299,
                INT_SAMPLER_CUBE: 36300,
                INT_SAMPLER_2D_ARRAY: 36303,
                UNSIGNED_INT_SAMPLER_2D: 36306,
                UNSIGNED_INT_SAMPLER_3D: 36307,
                UNSIGNED_INT_SAMPLER_CUBE: 36308,
                UNSIGNED_INT_SAMPLER_2D_ARRAY: 36311,
                DEPTH_COMPONENT32F: 36012,
                DEPTH32F_STENCIL8: 36013,
                FLOAT_32_UNSIGNED_INT_24_8_REV: 36269,
                FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: 33296,
                FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 33297,
                FRAMEBUFFER_ATTACHMENT_RED_SIZE: 33298,
                FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: 33299,
                FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: 33300,
                FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: 33301,
                FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 33302,
                FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: 33303,
                FRAMEBUFFER_DEFAULT: 33304,
                UNSIGNED_INT_24_8: 34042,
                DEPTH24_STENCIL8: 35056,
                UNSIGNED_NORMALIZED: 35863,
                DRAW_FRAMEBUFFER_BINDING: 36006,
                READ_FRAMEBUFFER: 36008,
                DRAW_FRAMEBUFFER: 36009,
                READ_FRAMEBUFFER_BINDING: 36010,
                RENDERBUFFER_SAMPLES: 36011,
                FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: 36052,
                MAX_COLOR_ATTACHMENTS: 36063,
                COLOR_ATTACHMENT1: 36065,
                COLOR_ATTACHMENT2: 36066,
                COLOR_ATTACHMENT3: 36067,
                COLOR_ATTACHMENT4: 36068,
                COLOR_ATTACHMENT5: 36069,
                COLOR_ATTACHMENT6: 36070,
                COLOR_ATTACHMENT7: 36071,
                COLOR_ATTACHMENT8: 36072,
                COLOR_ATTACHMENT9: 36073,
                COLOR_ATTACHMENT10: 36074,
                COLOR_ATTACHMENT11: 36075,
                COLOR_ATTACHMENT12: 36076,
                COLOR_ATTACHMENT13: 36077,
                COLOR_ATTACHMENT14: 36078,
                COLOR_ATTACHMENT15: 36079,
                FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: 36182,
                MAX_SAMPLES: 36183,
                HALF_FLOAT: 5131,
                RG: 33319,
                RG_INTEGER: 33320,
                R8: 33321,
                RG8: 33323,
                R16F: 33325,
                R32F: 33326,
                RG16F: 33327,
                RG32F: 33328,
                R8I: 33329,
                R8UI: 33330,
                R16I: 33331,
                R16UI: 33332,
                R32I: 33333,
                R32UI: 33334,
                RG8I: 33335,
                RG8UI: 33336,
                RG16I: 33337,
                RG16UI: 33338,
                RG32I: 33339,
                RG32UI: 33340,
                VERTEX_ARRAY_BINDING: 34229,
                R8_SNORM: 36756,
                RG8_SNORM: 36757,
                RGB8_SNORM: 36758,
                RGBA8_SNORM: 36759,
                SIGNED_NORMALIZED: 36764,
                COPY_READ_BUFFER: 36662,
                COPY_WRITE_BUFFER: 36663,
                COPY_READ_BUFFER_BINDING: 36662,
                COPY_WRITE_BUFFER_BINDING: 36663,
                UNIFORM_BUFFER: 35345,
                UNIFORM_BUFFER_BINDING: 35368,
                UNIFORM_BUFFER_START: 35369,
                UNIFORM_BUFFER_SIZE: 35370,
                MAX_VERTEX_UNIFORM_BLOCKS: 35371,
                MAX_FRAGMENT_UNIFORM_BLOCKS: 35373,
                MAX_COMBINED_UNIFORM_BLOCKS: 35374,
                MAX_UNIFORM_BUFFER_BINDINGS: 35375,
                MAX_UNIFORM_BLOCK_SIZE: 35376,
                MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: 35377,
                MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: 35379,
                UNIFORM_BUFFER_OFFSET_ALIGNMENT: 35380,
                ACTIVE_UNIFORM_BLOCKS: 35382,
                UNIFORM_TYPE: 35383,
                UNIFORM_SIZE: 35384,
                UNIFORM_BLOCK_INDEX: 35386,
                UNIFORM_OFFSET: 35387,
                UNIFORM_ARRAY_STRIDE: 35388,
                UNIFORM_MATRIX_STRIDE: 35389,
                UNIFORM_IS_ROW_MAJOR: 35390,
                UNIFORM_BLOCK_BINDING: 35391,
                UNIFORM_BLOCK_DATA_SIZE: 35392,
                UNIFORM_BLOCK_ACTIVE_UNIFORMS: 35394,
                UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: 35395,
                UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: 35396,
                UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: 35398,
                INVALID_INDEX: 4294967295,
                MAX_VERTEX_OUTPUT_COMPONENTS: 37154,
                MAX_FRAGMENT_INPUT_COMPONENTS: 37157,
                MAX_SERVER_WAIT_TIMEOUT: 37137,
                OBJECT_TYPE: 37138,
                SYNC_CONDITION: 37139,
                SYNC_STATUS: 37140,
                SYNC_FLAGS: 37141,
                SYNC_FENCE: 37142,
                SYNC_GPU_COMMANDS_COMPLETE: 37143,
                UNSIGNALED: 37144,
                SIGNALED: 37145,
                ALREADY_SIGNALED: 37146,
                TIMEOUT_EXPIRED: 37147,
                CONDITION_SATISFIED: 37148,
                WAIT_FAILED: 37149,
                SYNC_FLUSH_COMMANDS_BIT: 1,
                VERTEX_ATTRIB_ARRAY_DIVISOR: 35070,
                ANY_SAMPLES_PASSED: 35887,
                ANY_SAMPLES_PASSED_CONSERVATIVE: 36202,
                SAMPLER_BINDING: 35097,
                RGB10_A2UI: 36975,
                INT_2_10_10_10_REV: 36255,
                TRANSFORM_FEEDBACK: 36386,
                TRANSFORM_FEEDBACK_PAUSED: 36387,
                TRANSFORM_FEEDBACK_ACTIVE: 36388,
                TRANSFORM_FEEDBACK_BINDING: 36389,
                COMPRESSED_R11_EAC: 37488,
                COMPRESSED_SIGNED_R11_EAC: 37489,
                COMPRESSED_RG11_EAC: 37490,
                COMPRESSED_SIGNED_RG11_EAC: 37491,
                COMPRESSED_RGB8_ETC2: 37492,
                COMPRESSED_SRGB8_ETC2: 37493,
                COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: 37494,
                COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: 37495,
                COMPRESSED_RGBA8_ETC2_EAC: 37496,
                COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: 37497,
                TEXTURE_IMMUTABLE_FORMAT: 37167,
                MAX_ELEMENT_INDEX: 36203,
                TEXTURE_IMMUTABLE_LEVELS: 33503,
                MAX_TEXTURE_MAX_ANISOTROPY_EXT: 34047
            });
        }),
        define("Renderer/PixelDatatype", [
            "../Core/freezeObject",
            "../Core/WebGLConstants"
        ], function(e, r) {
            "use strict";
            var n = {
                UNSIGNED_BYTE: r.UNSIGNED_BYTE,
                UNSIGNED_SHORT: r.UNSIGNED_SHORT,
                UNSIGNED_INT: r.UNSIGNED_INT,
                FLOAT: r.FLOAT,
                HALF_FLOAT: r.HALF_FLOAT_OES,
                UNSIGNED_INT_24_8: r.UNSIGNED_INT_24_8,
                UNSIGNED_SHORT_4_4_4_4: r.UNSIGNED_SHORT_4_4_4_4,
                UNSIGNED_SHORT_5_5_5_1: r.UNSIGNED_SHORT_5_5_5_1,
                UNSIGNED_SHORT_5_6_5: r.UNSIGNED_SHORT_5_6_5,
                isPacked: function(e) {
                    return (
                        e === n.UNSIGNED_INT_24_8 ||
                        e === n.UNSIGNED_SHORT_4_4_4_4 ||
                        e === n.UNSIGNED_SHORT_5_5_5_1 ||
                        e === n.UNSIGNED_SHORT_5_6_5
                    );
                },
                sizeInBytes: function(e) {
                    switch (e) {
                        case n.UNSIGNED_BYTE:
                            return 1;
                        case n.UNSIGNED_SHORT:
                        case n.UNSIGNED_SHORT_4_4_4_4:
                        case n.UNSIGNED_SHORT_5_5_5_1:
                        case n.UNSIGNED_SHORT_5_6_5:
                        case n.HALF_FLOAT:
                            return 2;
                        case n.UNSIGNED_INT:
                        case n.FLOAT:
                        case n.UNSIGNED_INT_24_8:
                            return 4;
                    }
                },
                validate: function(e) {
                    return (
                        e === n.UNSIGNED_BYTE ||
                        e === n.UNSIGNED_SHORT ||
                        e === n.UNSIGNED_INT ||
                        e === n.FLOAT ||
                        e === n.HALF_FLOAT ||
                        e === n.UNSIGNED_INT_24_8 ||
                        e === n.UNSIGNED_SHORT_4_4_4_4 ||
                        e === n.UNSIGNED_SHORT_5_5_5_1 ||
                        e === n.UNSIGNED_SHORT_5_6_5
                    );
                }
            };
            return e(n);
        }),
        define("Core/PixelFormat", [
            "../Renderer/PixelDatatype",
            "./freezeObject",
            "./WebGLConstants"
        ], function(e, r, n) {
            "use strict";
            var t = {
                DEPTH_COMPONENT: n.DEPTH_COMPONENT,
                DEPTH_STENCIL: n.DEPTH_STENCIL,
                ALPHA: n.ALPHA,
                RGB: n.RGB,
                RGBA: n.RGBA,
                LUMINANCE: n.LUMINANCE,
                LUMINANCE_ALPHA: n.LUMINANCE_ALPHA,
                RGB_DXT1: n.COMPRESSED_RGB_S3TC_DXT1_EXT,
                RGBA_DXT1: n.COMPRESSED_RGBA_S3TC_DXT1_EXT,
                RGBA_DXT3: n.COMPRESSED_RGBA_S3TC_DXT3_EXT,
                RGBA_DXT5: n.COMPRESSED_RGBA_S3TC_DXT5_EXT,
                RGB_PVRTC_4BPPV1: n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG,
                RGB_PVRTC_2BPPV1: n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG,
                RGBA_PVRTC_4BPPV1: n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG,
                RGBA_PVRTC_2BPPV1: n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG,
                RGB_ETC1: n.COMPRESSED_RGB_ETC1_WEBGL,
                componentsLength: function(e) {
                    switch (e) {
                        case t.RGB:
                            return 3;
                        case t.RGBA:
                            return 4;
                        case t.LUMINANCE_ALPHA:
                            return 2;
                        case t.ALPHA:
                        case t.LUMINANCE:
                        default:
                            return 1;
                    }
                },
                validate: function(e) {
                    return (
                        e === t.DEPTH_COMPONENT ||
                        e === t.DEPTH_STENCIL ||
                        e === t.ALPHA ||
                        e === t.RGB ||
                        e === t.RGBA ||
                        e === t.LUMINANCE ||
                        e === t.LUMINANCE_ALPHA ||
                        e === t.RGB_DXT1 ||
                        e === t.RGBA_DXT1 ||
                        e === t.RGBA_DXT3 ||
                        e === t.RGBA_DXT5 ||
                        e === t.RGB_PVRTC_4BPPV1 ||
                        e === t.RGB_PVRTC_2BPPV1 ||
                        e === t.RGBA_PVRTC_4BPPV1 ||
                        e === t.RGBA_PVRTC_2BPPV1 ||
                        e === t.RGB_ETC1
                    );
                },
                isColorFormat: function(e) {
                    return (
                        e === t.ALPHA ||
                        e === t.RGB ||
                        e === t.RGBA ||
                        e === t.LUMINANCE ||
                        e === t.LUMINANCE_ALPHA
                    );
                },
                isDepthFormat: function(e) {
                    return e === t.DEPTH_COMPONENT || e === t.DEPTH_STENCIL;
                },
                isCompressedFormat: function(e) {
                    return (
                        e === t.RGB_DXT1 ||
                        e === t.RGBA_DXT1 ||
                        e === t.RGBA_DXT3 ||
                        e === t.RGBA_DXT5 ||
                        e === t.RGB_PVRTC_4BPPV1 ||
                        e === t.RGB_PVRTC_2BPPV1 ||
                        e === t.RGBA_PVRTC_4BPPV1 ||
                        e === t.RGBA_PVRTC_2BPPV1 ||
                        e === t.RGB_ETC1
                    );
                },
                isDXTFormat: function(e) {
                    return (
                        e === t.RGB_DXT1 ||
                        e === t.RGBA_DXT1 ||
                        e === t.RGBA_DXT3 ||
                        e === t.RGBA_DXT5
                    );
                },
                isPVRTCFormat: function(e) {
                    return (
                        e === t.RGB_PVRTC_4BPPV1 ||
                        e === t.RGB_PVRTC_2BPPV1 ||
                        e === t.RGBA_PVRTC_4BPPV1 ||
                        e === t.RGBA_PVRTC_2BPPV1
                    );
                },
                isETC1Format: function(e) {
                    return e === t.RGB_ETC1;
                },
                compressedTextureSizeInBytes: function(e, r, n) {
                    switch (e) {
                        case t.RGB_DXT1:
                        case t.RGBA_DXT1:
                        case t.RGB_ETC1:
                            return Math.floor((r + 3) / 4) * Math.floor((n + 3) / 4) * 8;
                        case t.RGBA_DXT3:
                        case t.RGBA_DXT5:
                            return Math.floor((r + 3) / 4) * Math.floor((n + 3) / 4) * 16;
                        case t.RGB_PVRTC_4BPPV1:
                        case t.RGBA_PVRTC_4BPPV1:
                            return Math.floor((Math.max(r, 8) * Math.max(n, 8) * 4 + 7) / 8);
                        case t.RGB_PVRTC_2BPPV1:
                        case t.RGBA_PVRTC_2BPPV1:
                            return Math.floor((Math.max(r, 16) * Math.max(n, 8) * 2 + 7) / 8);
                        default:
                            return 0;
                    }
                },
                textureSizeInBytes: function(r, n, i, _) {
                    var o = t.componentsLength(r);
                    return e.isPacked(n) && (o = 1), o * e.sizeInBytes(n) * i * _;
                },
                createTypedArray: function(r, n, i, _) {
                    var o = e.sizeInBytes(n);
                    return new (o === Uint8Array.BYTES_PER_ELEMENT
                        ? Uint8Array
                        : o === Uint16Array.BYTES_PER_ELEMENT
                        ? Uint16Array
                        : o === Float32Array.BYTES_PER_ELEMENT && n === e.FLOAT
                        ? Float32Array
                        : Uint32Array)(t.componentsLength(r) * i * _);
                },
                flipY: function(e, r, n, i, _) {
                    if (1 === _) return e;
                    for (
                        var o = t.createTypedArray(r, n, i, _),
                            a = t.componentsLength(r),
                            u = i * a,
                            E = 0;
                        E < _;
                        ++E
                    )
                        for (var f = E * _ * a, T = (_ - E - 1) * _ * a, c = 0; c < u; ++c)
                            o[T + c] = e[f + c];
                    return o;
                }
            };
            return r(t);
        }),
        define("Core/RuntimeError", ["./defined"], function(e) {
            "use strict";
            function r(e) {
                (this.name = "RuntimeError"), (this.message = e);
                var r;
                try {
                    throw new Error();
                } catch (e) {
                    r = e.stack;
                }
                this.stack = r;
            }
            return (
                e(Object.create) &&
                    ((r.prototype = Object.create(Error.prototype)), (r.prototype.constructor = r)),
                (r.prototype.toString = function() {
                    var r = this.name + ": " + this.message;
                    return e(this.stack) && (r += "\n" + this.stack.toString()), r;
                }),
                r
            );
        }),
        define("ThirdParty/crunch", [], function() {
            function globalEval(e) {
                eval.call(null, e);
            }
            function assert(e, r) {
                e || abort("Assertion failed: " + r);
            }
            function getCFunc(ident) {
                var func = Module["_" + ident];
                if (!func)
                    try {
                        func = eval("_" + ident);
                    } catch (e) {}
                return (
                    assert(
                        func,
                        "Cannot call unknown function " +
                            ident +
                            " (perhaps LLVM optimizations or closure removed it?)"
                    ),
                    func
                );
            }
            function setValue(e, r, n, t) {
                switch (((n = n || "i8"), "*" === n.charAt(n.length - 1) && (n = "i32"), n)) {
                    case "i1":
                    case "i8":
                        HEAP8[e >> 0] = r;
                        break;
                    case "i16":
                        HEAP16[e >> 1] = r;
                        break;
                    case "i32":
                        HEAP32[e >> 2] = r;
                        break;
                    case "i64":
                        (tempI64 = [
                            r >>> 0,
                            ((tempDouble = r),
                            +Math_abs(tempDouble) >= 1
                                ? tempDouble > 0
                                    ? (0 |
                                          Math_min(
                                              +Math_floor(tempDouble / 4294967296),
                                              4294967295
                                          )) >>>
                                      0
                                    : ~~+Math_ceil(
                                          (tempDouble - +(~~tempDouble >>> 0)) / 4294967296
                                      ) >>> 0
                                : 0)
                        ]),
                            (HEAP32[e >> 2] = tempI64[0]),
                            (HEAP32[(e + 4) >> 2] = tempI64[1]);
                        break;
                    case "float":
                        HEAPF32[e >> 2] = r;
                        break;
                    case "double":
                        HEAPF64[e >> 3] = r;
                        break;
                    default:
                        abort("invalid type for setValue: " + n);
                }
            }
            function getValue(e, r, n) {
                switch (((r = r || "i8"), "*" === r.charAt(r.length - 1) && (r = "i32"), r)) {
                    case "i1":
                    case "i8":
                        return HEAP8[e >> 0];
                    case "i16":
                        return HEAP16[e >> 1];
                    case "i32":
                    case "i64":
                        return HEAP32[e >> 2];
                    case "float":
                        return HEAPF32[e >> 2];
                    case "double":
                        return HEAPF64[e >> 3];
                    default:
                        abort("invalid type for setValue: " + r);
                }
                return null;
            }
            function allocate(e, r, n, t) {
                var i, _;
                "number" == typeof e ? ((i = !0), (_ = e)) : ((i = !1), (_ = e.length));
                var o,
                    a = "string" == typeof r ? r : null;
                if (
                    ((o =
                        n == ALLOC_NONE
                            ? t
                            : [
                                  "function" == typeof _malloc ? _malloc : Runtime.staticAlloc,
                                  Runtime.stackAlloc,
                                  Runtime.staticAlloc,
                                  Runtime.dynamicAlloc
                              ][void 0 === n ? ALLOC_STATIC : n](Math.max(_, a ? 1 : r.length))),
                    i)
                ) {
                    var u,
                        t = o;
                    for (assert(0 == (3 & o)), u = o + (-4 & _); t < u; t += 4) HEAP32[t >> 2] = 0;
                    for (u = o + _; t < u; ) HEAP8[t++ >> 0] = 0;
                    return o;
                }
                if ("i8" === a)
                    return (
                        e.subarray || e.slice ? HEAPU8.set(e, o) : HEAPU8.set(new Uint8Array(e), o),
                        o
                    );
                for (var E, f, T, c = 0; c < _; ) {
                    var l = e[c];
                    "function" == typeof l && (l = Runtime.getFunctionIndex(l)),
                        (E = a || r[c]),
                        0 !== E
                            ? ("i64" == E && (E = "i32"),
                              setValue(o + c, l, E),
                              T !== E && ((f = Runtime.getNativeTypeSize(E)), (T = E)),
                              (c += f))
                            : c++;
                }
                return o;
            }
            function getMemory(e) {
                return staticSealed
                    ? runtimeInitialized
                        ? _malloc(e)
                        : Runtime.dynamicAlloc(e)
                    : Runtime.staticAlloc(e);
            }
            function Pointer_stringify(e, r) {
                if (0 === r || !e) return "";
                for (var n, t = 0, i = 0; ; ) {
                    if (((n = HEAPU8[(e + i) >> 0]), (t |= n), 0 == n && !r)) break;
                    if ((i++, r && i == r)) break;
                }
                r || (r = i);
                var _ = "";
                if (t < 128) {
                    for (var o; r > 0; )
                        (o = String.fromCharCode.apply(
                            String,
                            HEAPU8.subarray(e, e + Math.min(r, 1024))
                        )),
                            (_ = _ ? _ + o : o),
                            (e += 1024),
                            (r -= 1024);
                    return _;
                }
                return Module.UTF8ToString(e);
            }
            function AsciiToString(e) {
                for (var r = ""; ; ) {
                    var n = HEAP8[e++ >> 0];
                    if (!n) return r;
                    r += String.fromCharCode(n);
                }
            }
            function stringToAscii(e, r) {
                return writeAsciiToMemory(e, r, !1);
            }
            function UTF8ArrayToString(e, r) {
                for (var n = r; e[n]; ) ++n;
                if (n - r > 16 && e.subarray && UTF8Decoder)
                    return UTF8Decoder.decode(e.subarray(r, n));
                for (var t, i, _, o, a, u, E = ""; ; ) {
                    if (!(t = e[r++])) return E;
                    if (128 & t)
                        if (((i = 63 & e[r++]), 192 != (224 & t)))
                            if (
                                ((_ = 63 & e[r++]),
                                224 == (240 & t)
                                    ? (t = ((15 & t) << 12) | (i << 6) | _)
                                    : ((o = 63 & e[r++]),
                                      240 == (248 & t)
                                          ? (t = ((7 & t) << 18) | (i << 12) | (_ << 6) | o)
                                          : ((a = 63 & e[r++]),
                                            248 == (252 & t)
                                                ? (t =
                                                      ((3 & t) << 24) |
                                                      (i << 18) |
                                                      (_ << 12) |
                                                      (o << 6) |
                                                      a)
                                                : ((u = 63 & e[r++]),
                                                  (t =
                                                      ((1 & t) << 30) |
                                                      (i << 24) |
                                                      (_ << 18) |
                                                      (o << 12) |
                                                      (a << 6) |
                                                      u)))),
                                t < 65536)
                            )
                                E += String.fromCharCode(t);
                            else {
                                var f = t - 65536;
                                E += String.fromCharCode(55296 | (f >> 10), 56320 | (1023 & f));
                            }
                        else E += String.fromCharCode(((31 & t) << 6) | i);
                    else E += String.fromCharCode(t);
                }
            }
            function UTF8ToString(e) {
                return UTF8ArrayToString(HEAPU8, e);
            }
            function stringToUTF8Array(e, r, n, t) {
                if (!(t > 0)) return 0;
                for (var i = n, _ = n + t - 1, o = 0; o < e.length; ++o) {
                    var a = e.charCodeAt(o);
                    if (
                        (a >= 55296 &&
                            a <= 57343 &&
                            (a = (65536 + ((1023 & a) << 10)) | (1023 & e.charCodeAt(++o))),
                        a <= 127)
                    ) {
                        if (n >= _) break;
                        r[n++] = a;
                    } else if (a <= 2047) {
                        if (n + 1 >= _) break;
                        (r[n++] = 192 | (a >> 6)), (r[n++] = 128 | (63 & a));
                    } else if (a <= 65535) {
                        if (n + 2 >= _) break;
                        (r[n++] = 224 | (a >> 12)),
                            (r[n++] = 128 | ((a >> 6) & 63)),
                            (r[n++] = 128 | (63 & a));
                    } else if (a <= 2097151) {
                        if (n + 3 >= _) break;
                        (r[n++] = 240 | (a >> 18)),
                            (r[n++] = 128 | ((a >> 12) & 63)),
                            (r[n++] = 128 | ((a >> 6) & 63)),
                            (r[n++] = 128 | (63 & a));
                    } else if (a <= 67108863) {
                        if (n + 4 >= _) break;
                        (r[n++] = 248 | (a >> 24)),
                            (r[n++] = 128 | ((a >> 18) & 63)),
                            (r[n++] = 128 | ((a >> 12) & 63)),
                            (r[n++] = 128 | ((a >> 6) & 63)),
                            (r[n++] = 128 | (63 & a));
                    } else {
                        if (n + 5 >= _) break;
                        (r[n++] = 252 | (a >> 30)),
                            (r[n++] = 128 | ((a >> 24) & 63)),
                            (r[n++] = 128 | ((a >> 18) & 63)),
                            (r[n++] = 128 | ((a >> 12) & 63)),
                            (r[n++] = 128 | ((a >> 6) & 63)),
                            (r[n++] = 128 | (63 & a));
                    }
                }
                return (r[n] = 0), n - i;
            }
            function stringToUTF8(e, r, n) {
                return stringToUTF8Array(e, HEAPU8, r, n);
            }
            function lengthBytesUTF8(e) {
                for (var r = 0, n = 0; n < e.length; ++n) {
                    var t = e.charCodeAt(n);
                    t >= 55296 &&
                        t <= 57343 &&
                        (t = (65536 + ((1023 & t) << 10)) | (1023 & e.charCodeAt(++n))),
                        t <= 127
                            ? ++r
                            : (r +=
                                  t <= 2047
                                      ? 2
                                      : t <= 65535
                                      ? 3
                                      : t <= 2097151
                                      ? 4
                                      : t <= 67108863
                                      ? 5
                                      : 6);
                }
                return r;
            }
            function demangle(e) {
                var r = Module.___cxa_demangle || Module.__cxa_demangle;
                if (r) {
                    try {
                        var n = e.substr(1),
                            t = lengthBytesUTF8(n) + 1,
                            i = _malloc(t);
                        stringToUTF8(n, i, t);
                        var _ = _malloc(4),
                            o = r(i, 0, 0, _);
                        if (0 === getValue(_, "i32") && o) return Pointer_stringify(o);
                    } catch (e) {
                    } finally {
                        i && _free(i), _ && _free(_), o && _free(o);
                    }
                    return e;
                }
                return (
                    Runtime.warnOnce(
                        "warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling"
                    ),
                    e
                );
            }
            function demangleAll(e) {
                var r = /__Z[\w\d_]+/g;
                return e.replace(r, function(e) {
                    var r = demangle(e);
                    return e === r ? e : e + " [" + r + "]";
                });
            }
            function jsStackTrace() {
                var e = new Error();
                if (!e.stack) {
                    try {
                        throw new Error(0);
                    } catch (r) {
                        e = r;
                    }
                    if (!e.stack) return "(no stack trace available)";
                }
                return e.stack.toString();
            }
            function stackTrace() {
                var e = jsStackTrace();
                return (
                    Module.extraStackTrace && (e += "\n" + Module.extraStackTrace()), demangleAll(e)
                );
            }
            function alignUp(e, r) {
                return e % r > 0 && (e += r - (e % r)), e;
            }
            function updateGlobalBuffer(e) {
                Module.buffer = buffer = e;
            }
            function updateGlobalBufferViews() {
                (Module.HEAP8 = HEAP8 = new Int8Array(buffer)),
                    (Module.HEAP16 = HEAP16 = new Int16Array(buffer)),
                    (Module.HEAP32 = HEAP32 = new Int32Array(buffer)),
                    (Module.HEAPU8 = HEAPU8 = new Uint8Array(buffer)),
                    (Module.HEAPU16 = HEAPU16 = new Uint16Array(buffer)),
                    (Module.HEAPU32 = HEAPU32 = new Uint32Array(buffer)),
                    (Module.HEAPF32 = HEAPF32 = new Float32Array(buffer)),
                    (Module.HEAPF64 = HEAPF64 = new Float64Array(buffer));
            }
            function abortOnCannotGrowMemory() {
                abort(
                    "Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value " +
                        TOTAL_MEMORY +
                        ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or (4) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 "
                );
            }
            function enlargeMemory() {
                var e = Module.usingWasm ? WASM_PAGE_SIZE : ASMJS_PAGE_SIZE,
                    r = 2147483648 - e;
                if (HEAP32[DYNAMICTOP_PTR >> 2] > r) return !1;
                var n = TOTAL_MEMORY;
                for (
                    TOTAL_MEMORY = Math.max(TOTAL_MEMORY, MIN_TOTAL_MEMORY);
                    TOTAL_MEMORY < HEAP32[DYNAMICTOP_PTR >> 2];

                )
                    TOTAL_MEMORY =
                        TOTAL_MEMORY <= 536870912
                            ? alignUp(2 * TOTAL_MEMORY, e)
                            : Math.min(alignUp((3 * TOTAL_MEMORY + 2147483648) / 4, e), r);
                var t = Module.reallocBuffer(TOTAL_MEMORY);
                return t && t.byteLength == TOTAL_MEMORY
                    ? (updateGlobalBuffer(t), updateGlobalBufferViews(), !0)
                    : ((TOTAL_MEMORY = n), !1);
            }
            function getTotalMemory() {
                return TOTAL_MEMORY;
            }
            function callRuntimeCallbacks(e) {
                for (; e.length > 0; ) {
                    var r = e.shift();
                    if ("function" != typeof r) {
                        var n = r.func;
                        "number" == typeof n
                            ? void 0 === r.arg
                                ? Module.dynCall_v(n)
                                : Module.dynCall_vi(n, r.arg)
                            : n(void 0 === r.arg ? null : r.arg);
                    } else r();
                }
            }
            function preRun() {
                if (Module.preRun)
                    for (
                        "function" == typeof Module.preRun && (Module.preRun = [Module.preRun]);
                        Module.preRun.length;

                    )
                        addOnPreRun(Module.preRun.shift());
                callRuntimeCallbacks(__ATPRERUN__);
            }
            function ensureInitRuntime() {
                runtimeInitialized || ((runtimeInitialized = !0), callRuntimeCallbacks(__ATINIT__));
            }
            function preMain() {
                callRuntimeCallbacks(__ATMAIN__);
            }
            function exitRuntime() {
                callRuntimeCallbacks(__ATEXIT__), (runtimeExited = !0);
            }
            function postRun() {
                if (Module.postRun)
                    for (
                        "function" == typeof Module.postRun && (Module.postRun = [Module.postRun]);
                        Module.postRun.length;

                    )
                        addOnPostRun(Module.postRun.shift());
                callRuntimeCallbacks(__ATPOSTRUN__);
            }
            function addOnPreRun(e) {
                __ATPRERUN__.unshift(e);
            }
            function addOnInit(e) {
                __ATINIT__.unshift(e);
            }
            function addOnPreMain(e) {
                __ATMAIN__.unshift(e);
            }
            function addOnExit(e) {
                __ATEXIT__.unshift(e);
            }
            function addOnPostRun(e) {
                __ATPOSTRUN__.unshift(e);
            }
            function intArrayFromString(e, r, n) {
                var t = n > 0 ? n : lengthBytesUTF8(e) + 1,
                    i = new Array(t),
                    _ = stringToUTF8Array(e, i, 0, i.length);
                return r && (i.length = _), i;
            }
            function intArrayToString(e) {
                for (var r = [], n = 0; n < e.length; n++) {
                    var t = e[n];
                    t > 255 && (t &= 255), r.push(String.fromCharCode(t));
                }
                return r.join("");
            }
            function writeStringToMemory(e, r, n) {
                Runtime.warnOnce(
                    "writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!"
                );
                var t, i;
                n && ((i = r + lengthBytesUTF8(e)), (t = HEAP8[i])),
                    stringToUTF8(e, r, 1 / 0),
                    n && (HEAP8[i] = t);
            }
            function writeArrayToMemory(e, r) {
                HEAP8.set(e, r);
            }
            function writeAsciiToMemory(e, r, n) {
                for (var t = 0; t < e.length; ++t) HEAP8[r++ >> 0] = e.charCodeAt(t);
                n || (HEAP8[r >> 0] = 0);
            }
            function addRunDependency(e) {
                runDependencies++,
                    Module.monitorRunDependencies && Module.monitorRunDependencies(runDependencies);
            }
            function removeRunDependency(e) {
                if (
                    (runDependencies--,
                    Module.monitorRunDependencies && Module.monitorRunDependencies(runDependencies),
                    0 == runDependencies &&
                        (null !== runDependencyWatcher &&
                            (clearInterval(runDependencyWatcher), (runDependencyWatcher = null)),
                        dependenciesFulfilled))
                ) {
                    var r = dependenciesFulfilled;
                    (dependenciesFulfilled = null), r();
                }
            }
            function _abort() {
                Module.abort();
            }
            function __ZSt18uncaught_exceptionv() {
                return !!__ZSt18uncaught_exceptionv.uncaught_exception;
            }
            function ___cxa_begin_catch(e) {
                var r = EXCEPTIONS.infos[e];
                return (
                    r &&
                        !r.caught &&
                        ((r.caught = !0), __ZSt18uncaught_exceptionv.uncaught_exception--),
                    r && (r.rethrown = !1),
                    EXCEPTIONS.caught.push(e),
                    EXCEPTIONS.addRef(EXCEPTIONS.deAdjust(e)),
                    e
                );
            }
            function _pthread_once(e, r) {
                _pthread_once.seen || (_pthread_once.seen = {}),
                    e in _pthread_once.seen || (Module.dynCall_v(r), (_pthread_once.seen[e] = 1));
            }
            function _emscripten_memcpy_big(e, r, n) {
                return HEAPU8.set(HEAPU8.subarray(r, r + n), e), e;
            }
            function ___syscall6(e, r) {
                SYSCALLS.varargs = r;
                try {
                    var n = SYSCALLS.getStreamFromFD();
                    return FS.close(n), 0;
                } catch (e) {
                    return (
                        ("undefined" != typeof FS && e instanceof FS.ErrnoError) || abort(e),
                        -e.errno
                    );
                }
            }
            function _pthread_getspecific(e) {
                return PTHREAD_SPECIFIC[e] || 0;
            }
            function ___setErrNo(e) {
                return Module.___errno_location && (HEAP32[Module.___errno_location() >> 2] = e), e;
            }
            function _pthread_key_create(e, r) {
                return 0 == e
                    ? ERRNO_CODES.EINVAL
                    : ((HEAP32[e >> 2] = PTHREAD_SPECIFIC_NEXT_KEY),
                      (PTHREAD_SPECIFIC[PTHREAD_SPECIFIC_NEXT_KEY] = 0),
                      PTHREAD_SPECIFIC_NEXT_KEY++,
                      0);
            }
            function ___resumeException(e) {
                throw (EXCEPTIONS.last || (EXCEPTIONS.last = e),
                e +
                    " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.");
            }
            function ___cxa_find_matching_catch() {
                var e = EXCEPTIONS.last;
                if (!e) return 0 | (Runtime.setTempRet0(0), 0);
                var r = EXCEPTIONS.infos[e],
                    n = r.type;
                if (!n) return 0 | (Runtime.setTempRet0(0), e);
                var t = Array.prototype.slice.call(arguments);
                Module.___cxa_is_pointer_type(n);
                ___cxa_find_matching_catch.buffer ||
                    (___cxa_find_matching_catch.buffer = _malloc(4)),
                    (HEAP32[___cxa_find_matching_catch.buffer >> 2] = e),
                    (e = ___cxa_find_matching_catch.buffer);
                for (var i = 0; i < t.length; i++)
                    if (t[i] && Module.___cxa_can_catch(t[i], n, e))
                        return (
                            (e = HEAP32[e >> 2]),
                            (r.adjusted = e),
                            0 | (Runtime.setTempRet0(t[i]), e)
                        );
                return (e = HEAP32[e >> 2]), 0 | (Runtime.setTempRet0(n), e);
            }
            function ___gxx_personality_v0() {}
            function _pthread_setspecific(e, r) {
                return e in PTHREAD_SPECIFIC ? ((PTHREAD_SPECIFIC[e] = r), 0) : ERRNO_CODES.EINVAL;
            }
            function ___syscall140(e, r) {
                SYSCALLS.varargs = r;
                try {
                    var n = SYSCALLS.getStreamFromFD(),
                        t = (SYSCALLS.get(), SYSCALLS.get()),
                        i = SYSCALLS.get(),
                        _ = SYSCALLS.get(),
                        o = t;
                    return (
                        FS.llseek(n, o, _),
                        (HEAP32[i >> 2] = n.position),
                        n.getdents && 0 === o && 0 === _ && (n.getdents = null),
                        0
                    );
                } catch (e) {
                    return (
                        ("undefined" != typeof FS && e instanceof FS.ErrnoError) || abort(e),
                        -e.errno
                    );
                }
            }
            function ___syscall146(e, r) {
                SYSCALLS.varargs = r;
                try {
                    var n = SYSCALLS.get(),
                        t = SYSCALLS.get(),
                        i = SYSCALLS.get(),
                        _ = 0;
                    ___syscall146.buffer ||
                        ((___syscall146.buffers = [null, [], []]),
                        (___syscall146.printChar = function(e, r) {
                            var n = ___syscall146.buffers[e];
                            assert(n),
                                0 === r || 10 === r
                                    ? ((1 === e ? Module.print : Module.printErr)(
                                          UTF8ArrayToString(n, 0)
                                      ),
                                      (n.length = 0))
                                    : n.push(r);
                        }));
                    for (var o = 0; o < i; o++) {
                        for (
                            var a = HEAP32[(t + 8 * o) >> 2],
                                u = HEAP32[(t + (8 * o + 4)) >> 2],
                                E = 0;
                            E < u;
                            E++
                        )
                            ___syscall146.printChar(n, HEAPU8[a + E]);
                        _ += u;
                    }
                    return _;
                } catch (e) {
                    return (
                        ("undefined" != typeof FS && e instanceof FS.ErrnoError) || abort(e),
                        -e.errno
                    );
                }
            }
            function ___syscall54(e, r) {
                SYSCALLS.varargs = r;
                try {
                    return 0;
                } catch (e) {
                    return (
                        ("undefined" != typeof FS && e instanceof FS.ErrnoError) || abort(e),
                        -e.errno
                    );
                }
            }
            function invoke_iiii(e, r, n, t) {
                try {
                    return Module.dynCall_iiii(e, r, n, t);
                } catch (e) {
                    if ("number" != typeof e && "longjmp" !== e) throw e;
                    Module.setThrew(1, 0);
                }
            }
            function invoke_viiiii(e, r, n, t, i, _) {
                try {
                    Module.dynCall_viiiii(e, r, n, t, i, _);
                } catch (e) {
                    if ("number" != typeof e && "longjmp" !== e) throw e;
                    Module.setThrew(1, 0);
                }
            }
            function invoke_vi(e, r) {
                try {
                    Module.dynCall_vi(e, r);
                } catch (e) {
                    if ("number" != typeof e && "longjmp" !== e) throw e;
                    Module.setThrew(1, 0);
                }
            }
            function invoke_ii(e, r) {
                try {
                    return Module.dynCall_ii(e, r);
                } catch (e) {
                    if ("number" != typeof e && "longjmp" !== e) throw e;
                    Module.setThrew(1, 0);
                }
            }
            function invoke_viii(e, r, n, t) {
                try {
                    Module.dynCall_viii(e, r, n, t);
                } catch (e) {
                    if ("number" != typeof e && "longjmp" !== e) throw e;
                    Module.setThrew(1, 0);
                }
            }
            function invoke_v(e) {
                try {
                    Module.dynCall_v(e);
                } catch (e) {
                    if ("number" != typeof e && "longjmp" !== e) throw e;
                    Module.setThrew(1, 0);
                }
            }
            function invoke_viiiiii(e, r, n, t, i, _, o) {
                try {
                    Module.dynCall_viiiiii(e, r, n, t, i, _, o);
                } catch (e) {
                    if ("number" != typeof e && "longjmp" !== e) throw e;
                    Module.setThrew(1, 0);
                }
            }
            function invoke_viiii(e, r, n, t, i) {
                try {
                    Module.dynCall_viiii(e, r, n, t, i);
                } catch (e) {
                    if ("number" != typeof e && "longjmp" !== e) throw e;
                    Module.setThrew(1, 0);
                }
            }
            function ExitStatus(e) {
                (this.name = "ExitStatus"),
                    (this.message = "Program terminated with exit(" + e + ")"),
                    (this.status = e);
            }
            function run(e) {
                function r() {
                    Module.calledRun ||
                        ((Module.calledRun = !0),
                        ABORT ||
                            (ensureInitRuntime(),
                            preMain(),
                            Module.onRuntimeInitialized && Module.onRuntimeInitialized(),
                            Module._main && shouldRunNow && Module.callMain(e),
                            postRun()));
                }
                (e = e || Module.arguments),
                    null === preloadStartTime && (preloadStartTime = Date.now()),
                    runDependencies > 0 ||
                        (preRun(),
                        runDependencies > 0 ||
                            Module.calledRun ||
                            (Module.setStatus
                                ? (Module.setStatus("Running..."),
                                  setTimeout(function() {
                                      setTimeout(function() {
                                          Module.setStatus("");
                                      }, 1),
                                          r();
                                  }, 1))
                                : r()));
            }
            function exit(e, r) {
                (r && Module.noExitRuntime) ||
                    (Module.noExitRuntime ||
                        ((ABORT = !0),
                        (EXITSTATUS = e),
                        (STACKTOP = initialStackTop),
                        exitRuntime(),
                        Module.onExit && Module.onExit(e)),
                    ENVIRONMENT_IS_NODE && process.exit(e),
                    Module.quit(e, new ExitStatus(e)));
            }
            function abort(e) {
                Module.onAbort && Module.onAbort(e),
                    void 0 !== e
                        ? (Module.print(e), Module.printErr(e), (e = JSON.stringify(e)))
                        : (e = ""),
                    (ABORT = !0),
                    (EXITSTATUS = 1);
                var r =
                    "abort(" +
                    e +
                    ") at " +
                    stackTrace() +
                    "\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.";
                throw (abortDecorators &&
                    abortDecorators.forEach(function(n) {
                        r = n(r, e);
                    }),
                r);
            }
            var Module;
            Module || (Module = (void 0 !== Module ? Module : null) || {});
            var moduleOverrides = {};
            for (var key in Module)
                Module.hasOwnProperty(key) && (moduleOverrides[key] = Module[key]);
            var ENVIRONMENT_IS_WEB = !1,
                ENVIRONMENT_IS_WORKER = !1,
                ENVIRONMENT_IS_NODE = !1,
                ENVIRONMENT_IS_SHELL = !1;
            if (Module.ENVIRONMENT)
                if ("WEB" === Module.ENVIRONMENT) ENVIRONMENT_IS_WEB = !0;
                else if ("WORKER" === Module.ENVIRONMENT) ENVIRONMENT_IS_WORKER = !0;
                else if ("NODE" === Module.ENVIRONMENT) ENVIRONMENT_IS_NODE = !0;
                else {
                    if ("SHELL" !== Module.ENVIRONMENT)
                        throw new Error(
                            "The provided Module['ENVIRONMENT'] value is not valid. It must be one of: WEB|WORKER|NODE|SHELL."
                        );
                    ENVIRONMENT_IS_SHELL = !0;
                }
            else
                (ENVIRONMENT_IS_WEB = "object" == typeof window),
                    (ENVIRONMENT_IS_WORKER = "function" == typeof importScripts),
                    (ENVIRONMENT_IS_NODE =
                        "object" == typeof process &&
                        "function" == typeof require &&
                        !ENVIRONMENT_IS_WEB &&
                        !ENVIRONMENT_IS_WORKER),
                    (ENVIRONMENT_IS_SHELL =
                        !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER);
            if (ENVIRONMENT_IS_NODE) {
                Module.print || (Module.print = console.log),
                    Module.printErr || (Module.printErr = console.warn);
                var nodeFS, nodePath;
                (Module.read = function(e, r) {
                    nodeFS || (nodeFS = require("fs")),
                        nodePath || (nodePath = require("path")),
                        (e = nodePath.normalize(e));
                    var n = nodeFS.readFileSync(e);
                    return r ? n : n.toString();
                }),
                    (Module.readBinary = function(e) {
                        var r = Module.read(e, !0);
                        return r.buffer || (r = new Uint8Array(r)), assert(r.buffer), r;
                    }),
                    (Module.load = function(e) {
                        globalEval(read(e));
                    }),
                    Module.thisProgram ||
                        (process.argv.length > 1
                            ? (Module.thisProgram = process.argv[1].replace(/\\/g, "/"))
                            : (Module.thisProgram = "unknown-program")),
                    (Module.arguments = process.argv.slice(2)),
                    "undefined" != typeof module && (module.exports = Module),
                    process.on("uncaughtException", function(e) {
                        if (!(e instanceof ExitStatus)) throw e;
                    }),
                    (Module.inspect = function() {
                        return "[Emscripten Module object]";
                    });
            } else if (ENVIRONMENT_IS_SHELL)
                Module.print || (Module.print = print),
                    "undefined" != typeof printErr && (Module.printErr = printErr),
                    "undefined" != typeof read
                        ? (Module.read = read)
                        : (Module.read = function() {
                              throw "no read() available";
                          }),
                    (Module.readBinary = function(e) {
                        if ("function" == typeof readbuffer) return new Uint8Array(readbuffer(e));
                        var r = read(e, "binary");
                        return assert("object" == typeof r), r;
                    }),
                    "undefined" != typeof scriptArgs
                        ? (Module.arguments = scriptArgs)
                        : void 0 !== arguments && (Module.arguments = arguments),
                    "function" == typeof quit &&
                        (Module.quit = function(e, r) {
                            quit(e);
                        });
            else {
                if (!ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER)
                    throw "Unknown runtime environment. Where are we?";
                if (
                    ((Module.read = function(e) {
                        var r = new XMLHttpRequest();
                        return r.open("GET", e, !1), r.send(null), r.responseText;
                    }),
                    ENVIRONMENT_IS_WORKER &&
                        (Module.readBinary = function(e) {
                            var r = new XMLHttpRequest();
                            return (
                                r.open("GET", e, !1),
                                (r.responseType = "arraybuffer"),
                                r.send(null),
                                new Uint8Array(r.response)
                            );
                        }),
                    (Module.readAsync = function(e, r, n) {
                        var t = new XMLHttpRequest();
                        t.open("GET", e, !0),
                            (t.responseType = "arraybuffer"),
                            (t.onload = function() {
                                200 == t.status || (0 == t.status && t.response)
                                    ? r(t.response)
                                    : n();
                            }),
                            (t.onerror = n),
                            t.send(null);
                    }),
                    void 0 !== arguments && (Module.arguments = arguments),
                    "undefined" != typeof console)
                )
                    Module.print ||
                        (Module.print = function(e) {
                            console.log(e);
                        }),
                        Module.printErr ||
                            (Module.printErr = function(e) {
                                console.warn(e);
                            });
                else {
                    var TRY_USE_DUMP = !1;
                    Module.print ||
                        (Module.print =
                            TRY_USE_DUMP && "undefined" != typeof dump
                                ? function(e) {
                                      dump(e);
                                  }
                                : function(e) {});
                }
                ENVIRONMENT_IS_WORKER && (Module.load = importScripts),
                    void 0 === Module.setWindowTitle &&
                        (Module.setWindowTitle = function(e) {
                            document.title = e;
                        });
            }
            !Module.load &&
                Module.read &&
                (Module.load = function(e) {
                    globalEval(Module.read(e));
                }),
                Module.print || (Module.print = function() {}),
                Module.printErr || (Module.printErr = Module.print),
                Module.arguments || (Module.arguments = []),
                Module.thisProgram || (Module.thisProgram = "./this.program"),
                Module.quit ||
                    (Module.quit = function(e, r) {
                        throw r;
                    }),
                (Module.print = Module.print),
                (Module.printErr = Module.printErr),
                (Module.preRun = []),
                (Module.postRun = []);
            for (var key in moduleOverrides)
                moduleOverrides.hasOwnProperty(key) && (Module[key] = moduleOverrides[key]);
            moduleOverrides = void 0;
            var Runtime = {
                setTempRet0: function(e) {
                    return (tempRet0 = e), e;
                },
                getTempRet0: function() {
                    return tempRet0;
                },
                stackSave: function() {
                    return STACKTOP;
                },
                stackRestore: function(e) {
                    STACKTOP = e;
                },
                getNativeTypeSize: function(e) {
                    switch (e) {
                        case "i1":
                        case "i8":
                            return 1;
                        case "i16":
                            return 2;
                        case "i32":
                            return 4;
                        case "i64":
                            return 8;
                        case "float":
                            return 4;
                        case "double":
                            return 8;
                        default:
                            if ("*" === e[e.length - 1]) return Runtime.QUANTUM_SIZE;
                            if ("i" === e[0]) {
                                var r = parseInt(e.substr(1));
                                return assert(r % 8 == 0), r / 8;
                            }
                            return 0;
                    }
                },
                getNativeFieldSize: function(e) {
                    return Math.max(Runtime.getNativeTypeSize(e), Runtime.QUANTUM_SIZE);
                },
                STACK_ALIGN: 16,
                prepVararg: function(e, r) {
                    return (
                        "double" === r || "i64" === r
                            ? 7 & e && (assert(4 == (7 & e)), (e += 4))
                            : assert(0 == (3 & e)),
                        e
                    );
                },
                getAlignSize: function(e, r, n) {
                    return n || ("i64" != e && "double" != e)
                        ? e
                            ? Math.min(
                                  r || (e ? Runtime.getNativeFieldSize(e) : 0),
                                  Runtime.QUANTUM_SIZE
                              )
                            : Math.min(r, 8)
                        : 8;
                },
                dynCall: function(e, r, n) {
                    return n && n.length
                        ? Module["dynCall_" + e].apply(null, [r].concat(n))
                        : Module["dynCall_" + e].call(null, r);
                },
                functionPointers: [],
                addFunction: function(e) {
                    for (var r = 0; r < Runtime.functionPointers.length; r++)
                        if (!Runtime.functionPointers[r])
                            return (Runtime.functionPointers[r] = e), 2 * (1 + r);
                    throw "Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.";
                },
                removeFunction: function(e) {
                    Runtime.functionPointers[(e - 2) / 2] = null;
                },
                warnOnce: function(e) {
                    Runtime.warnOnce.shown || (Runtime.warnOnce.shown = {}),
                        Runtime.warnOnce.shown[e] ||
                            ((Runtime.warnOnce.shown[e] = 1), Module.printErr(e));
                },
                funcWrappers: {},
                getFuncWrapper: function(e, r) {
                    assert(r), Runtime.funcWrappers[r] || (Runtime.funcWrappers[r] = {});
                    var n = Runtime.funcWrappers[r];
                    return (
                        n[e] ||
                            (1 === r.length
                                ? (n[e] = function() {
                                      return Runtime.dynCall(r, e);
                                  })
                                : 2 === r.length
                                ? (n[e] = function(n) {
                                      return Runtime.dynCall(r, e, [n]);
                                  })
                                : (n[e] = function() {
                                      return Runtime.dynCall(
                                          r,
                                          e,
                                          Array.prototype.slice.call(arguments)
                                      );
                                  })),
                        n[e]
                    );
                },
                getCompilerSetting: function(e) {
                    throw "You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work";
                },
                stackAlloc: function(e) {
                    var r = STACKTOP;
                    return (STACKTOP = (STACKTOP + e) | 0), (STACKTOP = (STACKTOP + 15) & -16), r;
                },
                staticAlloc: function(e) {
                    var r = STATICTOP;
                    return (
                        (STATICTOP = (STATICTOP + e) | 0), (STATICTOP = (STATICTOP + 15) & -16), r
                    );
                },
                dynamicAlloc: function(e) {
                    var r = HEAP32[DYNAMICTOP_PTR >> 2],
                        n = -16 & ((r + e + 15) | 0);
                    if (((HEAP32[DYNAMICTOP_PTR >> 2] = n), n >= TOTAL_MEMORY)) {
                        if (!enlargeMemory()) return (HEAP32[DYNAMICTOP_PTR >> 2] = r), 0;
                    }
                    return r;
                },
                alignMemory: function(e, r) {
                    return (e = Math.ceil(e / (r || 16)) * (r || 16));
                },
                makeBigInt: function(e, r, n) {
                    return n
                        ? +(e >>> 0) + 4294967296 * +(r >>> 0)
                        : +(e >>> 0) + 4294967296 * +(0 | r);
                },
                GLOBAL_BASE: 8,
                QUANTUM_SIZE: 4,
                __dummy__: 0
            };
            Module.Runtime = Runtime;
            var ABORT = 0,
                EXITSTATUS = 0,
                cwrap,
                ccall;
            !(function() {
                function parseJSFunc(e) {
                    var r = e
                        .toString()
                        .match(sourceRegex)
                        .slice(1);
                    return { arguments: r[0], body: r[1], returnValue: r[2] };
                }
                function ensureJSsource() {
                    if (!JSsource) {
                        JSsource = {};
                        for (var e in JSfuncs)
                            JSfuncs.hasOwnProperty(e) && (JSsource[e] = parseJSFunc(JSfuncs[e]));
                    }
                }
                var JSfuncs = {
                        stackSave: function() {
                            Runtime.stackSave();
                        },
                        stackRestore: function() {
                            Runtime.stackRestore();
                        },
                        arrayToC: function(e) {
                            var r = Runtime.stackAlloc(e.length);
                            return writeArrayToMemory(e, r), r;
                        },
                        stringToC: function(e) {
                            var r = 0;
                            if (null !== e && void 0 !== e && 0 !== e) {
                                var n = 1 + (e.length << 2);
                                (r = Runtime.stackAlloc(n)), stringToUTF8(e, r, n);
                            }
                            return r;
                        }
                    },
                    toC = { string: JSfuncs.stringToC, array: JSfuncs.arrayToC };
                ccall = function(e, r, n, t, i) {
                    var _ = getCFunc(e),
                        o = [],
                        a = 0;
                    if (t)
                        for (var u = 0; u < t.length; u++) {
                            var E = toC[n[u]];
                            E
                                ? (0 === a && (a = Runtime.stackSave()), (o[u] = E(t[u])))
                                : (o[u] = t[u]);
                        }
                    var f = _.apply(null, o);
                    if (("string" === r && (f = Pointer_stringify(f)), 0 !== a)) {
                        if (i && i.async)
                            return void EmterpreterAsync.asyncFinalizers.push(function() {
                                Runtime.stackRestore(a);
                            });
                        Runtime.stackRestore(a);
                    }
                    return f;
                };
                var sourceRegex = /^function\s*[a-zA-Z$_0-9]*\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/,
                    JSsource = null;
                cwrap = function cwrap(ident, returnType, argTypes) {
                    argTypes = argTypes || [];
                    var cfunc = getCFunc(ident),
                        numericArgs = argTypes.every(function(e) {
                            return "number" === e;
                        }),
                        numericRet = "string" !== returnType;
                    if (numericRet && numericArgs) return cfunc;
                    var argNames = argTypes.map(function(e, r) {
                            return "$" + r;
                        }),
                        funcstr = "(function(" + argNames.join(",") + ") {",
                        nargs = argTypes.length;
                    if (!numericArgs) {
                        ensureJSsource(),
                            (funcstr += "var stack = " + JSsource.stackSave.body + ";");
                        for (var i = 0; i < nargs; i++) {
                            var arg = argNames[i],
                                type = argTypes[i];
                            if ("number" !== type) {
                                var convertCode = JSsource[type + "ToC"];
                                (funcstr += "var " + convertCode.arguments + " = " + arg + ";"),
                                    (funcstr += convertCode.body + ";"),
                                    (funcstr += arg + "=(" + convertCode.returnValue + ");");
                            }
                        }
                    }
                    var cfuncname = parseJSFunc(function() {
                        return cfunc;
                    }).returnValue;
                    if (
                        ((funcstr += "var ret = " + cfuncname + "(" + argNames.join(",") + ");"),
                        !numericRet)
                    ) {
                        var strgfy = parseJSFunc(function() {
                            return Pointer_stringify;
                        }).returnValue;
                        funcstr += "ret = " + strgfy + "(ret);";
                    }
                    return (
                        numericArgs ||
                            (ensureJSsource(),
                            (funcstr += JSsource.stackRestore.body.replace("()", "(stack)") + ";")),
                        (funcstr += "return ret})"),
                        eval(funcstr)
                    );
                };
            })(),
                (Module.ccall = ccall),
                (Module.cwrap = cwrap),
                (Module.setValue = setValue),
                (Module.getValue = getValue);
            var ALLOC_NORMAL = 0,
                ALLOC_STACK = 1,
                ALLOC_STATIC = 2,
                ALLOC_DYNAMIC = 3,
                ALLOC_NONE = 4;
            (Module.ALLOC_NORMAL = ALLOC_NORMAL),
                (Module.ALLOC_STACK = ALLOC_STACK),
                (Module.ALLOC_STATIC = ALLOC_STATIC),
                (Module.ALLOC_DYNAMIC = ALLOC_DYNAMIC),
                (Module.ALLOC_NONE = ALLOC_NONE),
                (Module.allocate = allocate),
                (Module.getMemory = getMemory),
                (Module.Pointer_stringify = Pointer_stringify),
                (Module.AsciiToString = AsciiToString),
                (Module.stringToAscii = stringToAscii);
            var UTF8Decoder = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
            (Module.UTF8ArrayToString = UTF8ArrayToString),
                (Module.UTF8ToString = UTF8ToString),
                (Module.stringToUTF8Array = stringToUTF8Array),
                (Module.stringToUTF8 = stringToUTF8),
                (Module.lengthBytesUTF8 = lengthBytesUTF8);
            var UTF16Decoder =
                "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;
            Module.stackTrace = stackTrace;
            var WASM_PAGE_SIZE = 65536,
                ASMJS_PAGE_SIZE = 16777216,
                MIN_TOTAL_MEMORY = 16777216,
                HEAP,
                buffer,
                HEAP8,
                HEAPU8,
                HEAP16,
                HEAPU16,
                HEAP32,
                HEAPU32,
                HEAPF32,
                HEAPF64,
                STATIC_BASE,
                STATICTOP,
                staticSealed,
                STACK_BASE,
                STACKTOP,
                STACK_MAX,
                DYNAMIC_BASE,
                DYNAMICTOP_PTR;
            (STATIC_BASE = STATICTOP = STACK_BASE = STACKTOP = STACK_MAX = DYNAMIC_BASE = DYNAMICTOP_PTR = 0),
                (staticSealed = !1),
                Module.reallocBuffer ||
                    (Module.reallocBuffer = function(e) {
                        var r;
                        try {
                            if (ArrayBuffer.transfer) r = ArrayBuffer.transfer(buffer, e);
                            else {
                                var n = HEAP8;
                                r = new ArrayBuffer(e);
                                new Int8Array(r).set(n);
                            }
                        } catch (e) {
                            return !1;
                        }
                        return !!_emscripten_replace_memory(r) && r;
                    });
            var byteLength;
            try {
                (byteLength = Function.prototype.call.bind(
                    Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get
                )),
                    byteLength(new ArrayBuffer(4));
            } catch (e) {
                byteLength = function(e) {
                    return e.byteLength;
                };
            }
            var TOTAL_STACK = Module.TOTAL_STACK || 5242880,
                TOTAL_MEMORY = Module.TOTAL_MEMORY || 16777216;
            if (
                (TOTAL_MEMORY < TOTAL_STACK &&
                    Module.printErr(
                        "TOTAL_MEMORY should be larger than TOTAL_STACK, was " +
                            TOTAL_MEMORY +
                            "! (TOTAL_STACK=" +
                            TOTAL_STACK +
                            ")"
                    ),
                (buffer = Module.buffer ? Module.buffer : new ArrayBuffer(TOTAL_MEMORY)),
                updateGlobalBufferViews(),
                (HEAP32[0] = 1668509029),
                (HEAP16[1] = 25459),
                115 !== HEAPU8[2] || 99 !== HEAPU8[3])
            )
                throw "Runtime error: expected the system to be little-endian!";
            (Module.HEAP = HEAP),
                (Module.buffer = buffer),
                (Module.HEAP8 = HEAP8),
                (Module.HEAP16 = HEAP16),
                (Module.HEAP32 = HEAP32),
                (Module.HEAPU8 = HEAPU8),
                (Module.HEAPU16 = HEAPU16),
                (Module.HEAPU32 = HEAPU32),
                (Module.HEAPF32 = HEAPF32),
                (Module.HEAPF64 = HEAPF64);
            var __ATPRERUN__ = [],
                __ATINIT__ = [],
                __ATMAIN__ = [],
                __ATEXIT__ = [],
                __ATPOSTRUN__ = [],
                runtimeInitialized = !1,
                runtimeExited = !1;
            (Module.addOnPreRun = addOnPreRun),
                (Module.addOnInit = addOnInit),
                (Module.addOnPreMain = addOnPreMain),
                (Module.addOnExit = addOnExit),
                (Module.addOnPostRun = addOnPostRun),
                (Module.intArrayFromString = intArrayFromString),
                (Module.intArrayToString = intArrayToString),
                (Module.writeStringToMemory = writeStringToMemory),
                (Module.writeArrayToMemory = writeArrayToMemory),
                (Module.writeAsciiToMemory = writeAsciiToMemory),
                (Math.imul && -5 === Math.imul(4294967295, 5)) ||
                    (Math.imul = function(e, r) {
                        var n = e >>> 16,
                            t = 65535 & e,
                            i = r >>> 16,
                            _ = 65535 & r;
                        return (t * _ + ((n * _ + t * i) << 16)) | 0;
                    }),
                (Math.imul = Math.imul),
                Math.clz32 ||
                    (Math.clz32 = function(e) {
                        e >>>= 0;
                        for (var r = 0; r < 32; r++) if (e & (1 << (31 - r))) return r;
                        return 32;
                    }),
                (Math.clz32 = Math.clz32),
                Math.trunc ||
                    (Math.trunc = function(e) {
                        return e < 0 ? Math.ceil(e) : Math.floor(e);
                    }),
                (Math.trunc = Math.trunc);
            var Math_abs = Math.abs,
                Math_cos = Math.cos,
                Math_sin = Math.sin,
                Math_tan = Math.tan,
                Math_acos = Math.acos,
                Math_asin = Math.asin,
                Math_atan = Math.atan,
                Math_atan2 = Math.atan2,
                Math_exp = Math.exp,
                Math_log = Math.log,
                Math_sqrt = Math.sqrt,
                Math_ceil = Math.ceil,
                Math_floor = Math.floor,
                Math_pow = Math.pow,
                Math_imul = Math.imul,
                Math_fround = Math.fround,
                Math_round = Math.round,
                Math_min = Math.min,
                Math_clz32 = Math.clz32,
                Math_trunc = Math.trunc,
                runDependencies = 0,
                runDependencyWatcher = null,
                dependenciesFulfilled = null;
            (Module.addRunDependency = addRunDependency),
                (Module.removeRunDependency = removeRunDependency),
                (Module.preloadedImages = {}),
                (Module.preloadedAudios = {});
            var ASM_CONSTS = [];
            (STATIC_BASE = Runtime.GLOBAL_BASE),
                (STATICTOP = STATIC_BASE + 6192),
                __ATINIT__.push(),
                allocate(
                    [
                        228,
                        2,
                        0,
                        0,
                        81,
                        16,
                        0,
                        0,
                        12,
                        3,
                        0,
                        0,
                        177,
                        16,
                        0,
                        0,
                        32,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        12,
                        3,
                        0,
                        0,
                        94,
                        16,
                        0,
                        0,
                        48,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        228,
                        2,
                        0,
                        0,
                        127,
                        16,
                        0,
                        0,
                        12,
                        3,
                        0,
                        0,
                        140,
                        16,
                        0,
                        0,
                        16,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        12,
                        3,
                        0,
                        0,
                        183,
                        17,
                        0,
                        0,
                        32,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        12,
                        3,
                        0,
                        0,
                        147,
                        17,
                        0,
                        0,
                        72,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        108,
                        0,
                        0,
                        0,
                        5,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        2,
                        0,
                        0,
                        0,
                        32,
                        20,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        2,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        255,
                        255,
                        255,
                        255,
                        255,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        248,
                        19,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        224,
                        1,
                        0,
                        0,
                        5,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        3,
                        0,
                        0,
                        0,
                        2,
                        0,
                        0,
                        0,
                        40,
                        20,
                        0,
                        0,
                        0,
                        4,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        10,
                        255,
                        255,
                        255,
                        255,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        4,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        255,
                        255,
                        255,
                        255,
                        255,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        16,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        2,
                        0,
                        0,
                        0,
                        3,
                        0,
                        0,
                        0,
                        4,
                        0,
                        0,
                        0,
                        5,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        56,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        5,
                        0,
                        0,
                        0,
                        3,
                        0,
                        0,
                        0,
                        4,
                        0,
                        0,
                        0,
                        5,
                        0,
                        0,
                        0,
                        2,
                        0,
                        0,
                        0,
                        2,
                        0,
                        0,
                        0,
                        2,
                        0,
                        0,
                        0,
                        37,
                        115,
                        40,
                        37,
                        117,
                        41,
                        58,
                        32,
                        65,
                        115,
                        115,
                        101,
                        114,
                        116,
                        105,
                        111,
                        110,
                        32,
                        102,
                        97,
                        105,
                        108,
                        117,
                        114,
                        101,
                        58,
                        32,
                        34,
                        37,
                        115,
                        34,
                        10,
                        0,
                        109,
                        95,
                        115,
                        105,
                        122,
                        101,
                        32,
                        60,
                        61,
                        32,
                        109,
                        95,
                        99,
                        97,
                        112,
                        97,
                        99,
                        105,
                        116,
                        121,
                        0,
                        46,
                        47,
                        105,
                        110,
                        99,
                        92,
                        99,
                        114,
                        110,
                        95,
                        100,
                        101,
                        99,
                        111,
                        109,
                        112,
                        46,
                        104,
                        0,
                        109,
                        105,
                        110,
                        95,
                        110,
                        101,
                        119,
                        95,
                        99,
                        97,
                        112,
                        97,
                        99,
                        105,
                        116,
                        121,
                        32,
                        60,
                        32,
                        40,
                        48,
                        120,
                        55,
                        70,
                        70,
                        70,
                        48,
                        48,
                        48,
                        48,
                        85,
                        32,
                        47,
                        32,
                        101,
                        108,
                        101,
                        109,
                        101,
                        110,
                        116,
                        95,
                        115,
                        105,
                        122,
                        101,
                        41,
                        0,
                        110,
                        101,
                        119,
                        95,
                        99,
                        97,
                        112,
                        97,
                        99,
                        105,
                        116,
                        121,
                        32,
                        38,
                        38,
                        32,
                        40,
                        110,
                        101,
                        119,
                        95,
                        99,
                        97,
                        112,
                        97,
                        99,
                        105,
                        116,
                        121,
                        32,
                        62,
                        32,
                        109,
                        95,
                        99,
                        97,
                        112,
                        97,
                        99,
                        105,
                        116,
                        121,
                        41,
                        0,
                        110,
                        117,
                        109,
                        95,
                        99,
                        111,
                        100,
                        101,
                        115,
                        91,
                        99,
                        93,
                        0,
                        115,
                        111,
                        114,
                        116,
                        101,
                        100,
                        95,
                        112,
                        111,
                        115,
                        32,
                        60,
                        32,
                        116,
                        111,
                        116,
                        97,
                        108,
                        95,
                        117,
                        115,
                        101,
                        100,
                        95,
                        115,
                        121,
                        109,
                        115,
                        0,
                        112,
                        67,
                        111,
                        100,
                        101,
                        115,
                        105,
                        122,
                        101,
                        115,
                        91,
                        115,
                        121,
                        109,
                        95,
                        105,
                        110,
                        100,
                        101,
                        120,
                        93,
                        32,
                        61,
                        61,
                        32,
                        99,
                        111,
                        100,
                        101,
                        115,
                        105,
                        122,
                        101,
                        0,
                        116,
                        32,
                        60,
                        32,
                        40,
                        49,
                        85,
                        32,
                        60,
                        60,
                        32,
                        116,
                        97,
                        98,
                        108,
                        101,
                        95,
                        98,
                        105,
                        116,
                        115,
                        41,
                        0,
                        109,
                        95,
                        108,
                        111,
                        111,
                        107,
                        117,
                        112,
                        91,
                        116,
                        93,
                        32,
                        61,
                        61,
                        32,
                        99,
                        85,
                        73,
                        78,
                        84,
                        51,
                        50,
                        95,
                        77,
                        65,
                        88,
                        0,
                        99,
                        114,
                        110,
                        100,
                        95,
                        109,
                        97,
                        108,
                        108,
                        111,
                        99,
                        58,
                        32,
                        115,
                        105,
                        122,
                        101,
                        32,
                        116,
                        111,
                        111,
                        32,
                        98,
                        105,
                        103,
                        0,
                        99,
                        114,
                        110,
                        100,
                        95,
                        109,
                        97,
                        108,
                        108,
                        111,
                        99,
                        58,
                        32,
                        111,
                        117,
                        116,
                        32,
                        111,
                        102,
                        32,
                        109,
                        101,
                        109,
                        111,
                        114,
                        121,
                        0,
                        40,
                        40,
                        117,
                        105,
                        110,
                        116,
                        51,
                        50,
                        41,
                        112,
                        95,
                        110,
                        101,
                        119,
                        32,
                        38,
                        32,
                        40,
                        67,
                        82,
                        78,
                        68,
                        95,
                        77,
                        73,
                        78,
                        95,
                        65,
                        76,
                        76,
                        79,
                        67,
                        95,
                        65,
                        76,
                        73,
                        71,
                        78,
                        77,
                        69,
                        78,
                        84,
                        32,
                        45,
                        32,
                        49,
                        41,
                        41,
                        32,
                        61,
                        61,
                        32,
                        48,
                        0,
                        99,
                        114,
                        110,
                        100,
                        95,
                        114,
                        101,
                        97,
                        108,
                        108,
                        111,
                        99,
                        58,
                        32,
                        98,
                        97,
                        100,
                        32,
                        112,
                        116,
                        114,
                        0,
                        99,
                        114,
                        110,
                        100,
                        95,
                        102,
                        114,
                        101,
                        101,
                        58,
                        32,
                        98,
                        97,
                        100,
                        32,
                        112,
                        116,
                        114,
                        0,
                        102,
                        97,
                        108,
                        115,
                        101,
                        0,
                        40,
                        116,
                        111,
                        116,
                        97,
                        108,
                        95,
                        115,
                        121,
                        109,
                        115,
                        32,
                        62,
                        61,
                        32,
                        49,
                        41,
                        32,
                        38,
                        38,
                        32,
                        40,
                        116,
                        111,
                        116,
                        97,
                        108,
                        95,
                        115,
                        121,
                        109,
                        115,
                        32,
                        60,
                        61,
                        32,
                        112,
                        114,
                        101,
                        102,
                        105,
                        120,
                        95,
                        99,
                        111,
                        100,
                        105,
                        110,
                        103,
                        58,
                        58,
                        99,
                        77,
                        97,
                        120,
                        83,
                        117,
                        112,
                        112,
                        111,
                        114,
                        116,
                        101,
                        100,
                        83,
                        121,
                        109,
                        115,
                        41,
                        0,
                        17,
                        18,
                        19,
                        20,
                        0,
                        8,
                        7,
                        9,
                        6,
                        10,
                        5,
                        11,
                        4,
                        12,
                        3,
                        13,
                        2,
                        14,
                        1,
                        15,
                        16,
                        48,
                        0,
                        110,
                        117,
                        109,
                        95,
                        98,
                        105,
                        116,
                        115,
                        32,
                        60,
                        61,
                        32,
                        51,
                        50,
                        85,
                        0,
                        109,
                        95,
                        98,
                        105,
                        116,
                        95,
                        99,
                        111,
                        117,
                        110,
                        116,
                        32,
                        60,
                        61,
                        32,
                        99,
                        66,
                        105,
                        116,
                        66,
                        117,
                        102,
                        83,
                        105,
                        122,
                        101,
                        0,
                        116,
                        32,
                        33,
                        61,
                        32,
                        99,
                        85,
                        73,
                        78,
                        84,
                        51,
                        50,
                        95,
                        77,
                        65,
                        88,
                        0,
                        109,
                        111,
                        100,
                        101,
                        108,
                        46,
                        109,
                        95,
                        99,
                        111,
                        100,
                        101,
                        95,
                        115,
                        105,
                        122,
                        101,
                        115,
                        91,
                        115,
                        121,
                        109,
                        93,
                        32,
                        61,
                        61,
                        32,
                        108,
                        101,
                        110,
                        0,
                        0,
                        2,
                        3,
                        1,
                        0,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        1,
                        40,
                        108,
                        101,
                        110,
                        32,
                        62,
                        61,
                        32,
                        49,
                        41,
                        32,
                        38,
                        38,
                        32,
                        40,
                        108,
                        101,
                        110,
                        32,
                        60,
                        61,
                        32,
                        99,
                        77,
                        97,
                        120,
                        69,
                        120,
                        112,
                        101,
                        99,
                        116,
                        101,
                        100,
                        67,
                        111,
                        100,
                        101,
                        83,
                        105,
                        122,
                        101,
                        41,
                        0,
                        105,
                        32,
                        60,
                        32,
                        109,
                        95,
                        115,
                        105,
                        122,
                        101,
                        0,
                        110,
                        101,
                        120,
                        116,
                        95,
                        108,
                        101,
                        118,
                        101,
                        108,
                        95,
                        111,
                        102,
                        115,
                        32,
                        62,
                        32,
                        99,
                        117,
                        114,
                        95,
                        108,
                        101,
                        118,
                        101,
                        108,
                        95,
                        111,
                        102,
                        115,
                        0,
                        1,
                        2,
                        2,
                        3,
                        3,
                        3,
                        3,
                        4,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1,
                        1,
                        0,
                        1,
                        0,
                        1,
                        0,
                        0,
                        1,
                        2,
                        1,
                        2,
                        0,
                        0,
                        0,
                        1,
                        0,
                        2,
                        1,
                        0,
                        2,
                        0,
                        0,
                        1,
                        2,
                        3,
                        110,
                        117,
                        109,
                        32,
                        38,
                        38,
                        32,
                        40,
                        110,
                        117,
                        109,
                        32,
                        61,
                        61,
                        32,
                        126,
                        110,
                        117,
                        109,
                        95,
                        99,
                        104,
                        101,
                        99,
                        107,
                        41,
                        0,
                        17,
                        0,
                        10,
                        0,
                        17,
                        17,
                        17,
                        0,
                        0,
                        0,
                        0,
                        5,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        9,
                        0,
                        0,
                        0,
                        0,
                        11,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        17,
                        0,
                        15,
                        10,
                        17,
                        17,
                        17,
                        3,
                        10,
                        7,
                        0,
                        1,
                        19,
                        9,
                        11,
                        11,
                        0,
                        0,
                        9,
                        6,
                        11,
                        0,
                        0,
                        11,
                        0,
                        6,
                        17,
                        0,
                        0,
                        0,
                        17,
                        17,
                        17,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        11,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        17,
                        0,
                        10,
                        10,
                        17,
                        17,
                        17,
                        0,
                        10,
                        0,
                        0,
                        2,
                        0,
                        9,
                        11,
                        0,
                        0,
                        0,
                        9,
                        0,
                        11,
                        0,
                        0,
                        11,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        12,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        12,
                        0,
                        0,
                        0,
                        0,
                        12,
                        0,
                        0,
                        0,
                        0,
                        9,
                        12,
                        0,
                        0,
                        0,
                        0,
                        0,
                        12,
                        0,
                        0,
                        12,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        14,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        13,
                        0,
                        0,
                        0,
                        4,
                        13,
                        0,
                        0,
                        0,
                        0,
                        9,
                        14,
                        0,
                        0,
                        0,
                        0,
                        0,
                        14,
                        0,
                        0,
                        14,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        16,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        15,
                        0,
                        0,
                        0,
                        0,
                        15,
                        0,
                        0,
                        0,
                        0,
                        9,
                        16,
                        0,
                        0,
                        0,
                        0,
                        0,
                        16,
                        0,
                        0,
                        16,
                        0,
                        0,
                        18,
                        0,
                        0,
                        0,
                        18,
                        18,
                        18,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        18,
                        0,
                        0,
                        0,
                        18,
                        18,
                        18,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        9,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        11,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        10,
                        0,
                        0,
                        0,
                        0,
                        10,
                        0,
                        0,
                        0,
                        0,
                        9,
                        11,
                        0,
                        0,
                        0,
                        0,
                        0,
                        11,
                        0,
                        0,
                        11,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        12,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        12,
                        0,
                        0,
                        0,
                        0,
                        12,
                        0,
                        0,
                        0,
                        0,
                        9,
                        12,
                        0,
                        0,
                        0,
                        0,
                        0,
                        12,
                        0,
                        0,
                        12,
                        0,
                        0,
                        45,
                        43,
                        32,
                        32,
                        32,
                        48,
                        88,
                        48,
                        120,
                        0,
                        40,
                        110,
                        117,
                        108,
                        108,
                        41,
                        0,
                        45,
                        48,
                        88,
                        43,
                        48,
                        88,
                        32,
                        48,
                        88,
                        45,
                        48,
                        120,
                        43,
                        48,
                        120,
                        32,
                        48,
                        120,
                        0,
                        105,
                        110,
                        102,
                        0,
                        73,
                        78,
                        70,
                        0,
                        110,
                        97,
                        110,
                        0,
                        78,
                        65,
                        78,
                        0,
                        48,
                        49,
                        50,
                        51,
                        52,
                        53,
                        54,
                        55,
                        56,
                        57,
                        65,
                        66,
                        67,
                        68,
                        69,
                        70,
                        46,
                        0,
                        84,
                        33,
                        34,
                        25,
                        13,
                        1,
                        2,
                        3,
                        17,
                        75,
                        28,
                        12,
                        16,
                        4,
                        11,
                        29,
                        18,
                        30,
                        39,
                        104,
                        110,
                        111,
                        112,
                        113,
                        98,
                        32,
                        5,
                        6,
                        15,
                        19,
                        20,
                        21,
                        26,
                        8,
                        22,
                        7,
                        40,
                        36,
                        23,
                        24,
                        9,
                        10,
                        14,
                        27,
                        31,
                        37,
                        35,
                        131,
                        130,
                        125,
                        38,
                        42,
                        43,
                        60,
                        61,
                        62,
                        63,
                        67,
                        71,
                        74,
                        77,
                        88,
                        89,
                        90,
                        91,
                        92,
                        93,
                        94,
                        95,
                        96,
                        97,
                        99,
                        100,
                        101,
                        102,
                        103,
                        105,
                        106,
                        107,
                        108,
                        114,
                        115,
                        116,
                        121,
                        122,
                        123,
                        124,
                        0,
                        73,
                        108,
                        108,
                        101,
                        103,
                        97,
                        108,
                        32,
                        98,
                        121,
                        116,
                        101,
                        32,
                        115,
                        101,
                        113,
                        117,
                        101,
                        110,
                        99,
                        101,
                        0,
                        68,
                        111,
                        109,
                        97,
                        105,
                        110,
                        32,
                        101,
                        114,
                        114,
                        111,
                        114,
                        0,
                        82,
                        101,
                        115,
                        117,
                        108,
                        116,
                        32,
                        110,
                        111,
                        116,
                        32,
                        114,
                        101,
                        112,
                        114,
                        101,
                        115,
                        101,
                        110,
                        116,
                        97,
                        98,
                        108,
                        101,
                        0,
                        78,
                        111,
                        116,
                        32,
                        97,
                        32,
                        116,
                        116,
                        121,
                        0,
                        80,
                        101,
                        114,
                        109,
                        105,
                        115,
                        115,
                        105,
                        111,
                        110,
                        32,
                        100,
                        101,
                        110,
                        105,
                        101,
                        100,
                        0,
                        79,
                        112,
                        101,
                        114,
                        97,
                        116,
                        105,
                        111,
                        110,
                        32,
                        110,
                        111,
                        116,
                        32,
                        112,
                        101,
                        114,
                        109,
                        105,
                        116,
                        116,
                        101,
                        100,
                        0,
                        78,
                        111,
                        32,
                        115,
                        117,
                        99,
                        104,
                        32,
                        102,
                        105,
                        108,
                        101,
                        32,
                        111,
                        114,
                        32,
                        100,
                        105,
                        114,
                        101,
                        99,
                        116,
                        111,
                        114,
                        121,
                        0,
                        78,
                        111,
                        32,
                        115,
                        117,
                        99,
                        104,
                        32,
                        112,
                        114,
                        111,
                        99,
                        101,
                        115,
                        115,
                        0,
                        70,
                        105,
                        108,
                        101,
                        32,
                        101,
                        120,
                        105,
                        115,
                        116,
                        115,
                        0,
                        86,
                        97,
                        108,
                        117,
                        101,
                        32,
                        116,
                        111,
                        111,
                        32,
                        108,
                        97,
                        114,
                        103,
                        101,
                        32,
                        102,
                        111,
                        114,
                        32,
                        100,
                        97,
                        116,
                        97,
                        32,
                        116,
                        121,
                        112,
                        101,
                        0,
                        78,
                        111,
                        32,
                        115,
                        112,
                        97,
                        99,
                        101,
                        32,
                        108,
                        101,
                        102,
                        116,
                        32,
                        111,
                        110,
                        32,
                        100,
                        101,
                        118,
                        105,
                        99,
                        101,
                        0,
                        79,
                        117,
                        116,
                        32,
                        111,
                        102,
                        32,
                        109,
                        101,
                        109,
                        111,
                        114,
                        121,
                        0,
                        82,
                        101,
                        115,
                        111,
                        117,
                        114,
                        99,
                        101,
                        32,
                        98,
                        117,
                        115,
                        121,
                        0,
                        73,
                        110,
                        116,
                        101,
                        114,
                        114,
                        117,
                        112,
                        116,
                        101,
                        100,
                        32,
                        115,
                        121,
                        115,
                        116,
                        101,
                        109,
                        32,
                        99,
                        97,
                        108,
                        108,
                        0,
                        82,
                        101,
                        115,
                        111,
                        117,
                        114,
                        99,
                        101,
                        32,
                        116,
                        101,
                        109,
                        112,
                        111,
                        114,
                        97,
                        114,
                        105,
                        108,
                        121,
                        32,
                        117,
                        110,
                        97,
                        118,
                        97,
                        105,
                        108,
                        97,
                        98,
                        108,
                        101,
                        0,
                        73,
                        110,
                        118,
                        97,
                        108,
                        105,
                        100,
                        32,
                        115,
                        101,
                        101,
                        107,
                        0,
                        67,
                        114,
                        111,
                        115,
                        115,
                        45,
                        100,
                        101,
                        118,
                        105,
                        99,
                        101,
                        32,
                        108,
                        105,
                        110,
                        107,
                        0,
                        82,
                        101,
                        97,
                        100,
                        45,
                        111,
                        110,
                        108,
                        121,
                        32,
                        102,
                        105,
                        108,
                        101,
                        32,
                        115,
                        121,
                        115,
                        116,
                        101,
                        109,
                        0,
                        68,
                        105,
                        114,
                        101,
                        99,
                        116,
                        111,
                        114,
                        121,
                        32,
                        110,
                        111,
                        116,
                        32,
                        101,
                        109,
                        112,
                        116,
                        121,
                        0,
                        67,
                        111,
                        110,
                        110,
                        101,
                        99,
                        116,
                        105,
                        111,
                        110,
                        32,
                        114,
                        101,
                        115,
                        101,
                        116,
                        32,
                        98,
                        121,
                        32,
                        112,
                        101,
                        101,
                        114,
                        0,
                        79,
                        112,
                        101,
                        114,
                        97,
                        116,
                        105,
                        111,
                        110,
                        32,
                        116,
                        105,
                        109,
                        101,
                        100,
                        32,
                        111,
                        117,
                        116,
                        0,
                        67,
                        111,
                        110,
                        110,
                        101,
                        99,
                        116,
                        105,
                        111,
                        110,
                        32,
                        114,
                        101,
                        102,
                        117,
                        115,
                        101,
                        100,
                        0,
                        72,
                        111,
                        115,
                        116,
                        32,
                        105,
                        115,
                        32,
                        100,
                        111,
                        119,
                        110,
                        0,
                        72,
                        111,
                        115,
                        116,
                        32,
                        105,
                        115,
                        32,
                        117,
                        110,
                        114,
                        101,
                        97,
                        99,
                        104,
                        97,
                        98,
                        108,
                        101,
                        0,
                        65,
                        100,
                        100,
                        114,
                        101,
                        115,
                        115,
                        32,
                        105,
                        110,
                        32,
                        117,
                        115,
                        101,
                        0,
                        66,
                        114,
                        111,
                        107,
                        101,
                        110,
                        32,
                        112,
                        105,
                        112,
                        101,
                        0,
                        73,
                        47,
                        79,
                        32,
                        101,
                        114,
                        114,
                        111,
                        114,
                        0,
                        78,
                        111,
                        32,
                        115,
                        117,
                        99,
                        104,
                        32,
                        100,
                        101,
                        118,
                        105,
                        99,
                        101,
                        32,
                        111,
                        114,
                        32,
                        97,
                        100,
                        100,
                        114,
                        101,
                        115,
                        115,
                        0,
                        66,
                        108,
                        111,
                        99,
                        107,
                        32,
                        100,
                        101,
                        118,
                        105,
                        99,
                        101,
                        32,
                        114,
                        101,
                        113,
                        117,
                        105,
                        114,
                        101,
                        100,
                        0,
                        78,
                        111,
                        32,
                        115,
                        117,
                        99,
                        104,
                        32,
                        100,
                        101,
                        118,
                        105,
                        99,
                        101,
                        0,
                        78,
                        111,
                        116,
                        32,
                        97,
                        32,
                        100,
                        105,
                        114,
                        101,
                        99,
                        116,
                        111,
                        114,
                        121,
                        0,
                        73,
                        115,
                        32,
                        97,
                        32,
                        100,
                        105,
                        114,
                        101,
                        99,
                        116,
                        111,
                        114,
                        121,
                        0,
                        84,
                        101,
                        120,
                        116,
                        32,
                        102,
                        105,
                        108,
                        101,
                        32,
                        98,
                        117,
                        115,
                        121,
                        0,
                        69,
                        120,
                        101,
                        99,
                        32,
                        102,
                        111,
                        114,
                        109,
                        97,
                        116,
                        32,
                        101,
                        114,
                        114,
                        111,
                        114,
                        0,
                        73,
                        110,
                        118,
                        97,
                        108,
                        105,
                        100,
                        32,
                        97,
                        114,
                        103,
                        117,
                        109,
                        101,
                        110,
                        116,
                        0,
                        65,
                        114,
                        103,
                        117,
                        109,
                        101,
                        110,
                        116,
                        32,
                        108,
                        105,
                        115,
                        116,
                        32,
                        116,
                        111,
                        111,
                        32,
                        108,
                        111,
                        110,
                        103,
                        0,
                        83,
                        121,
                        109,
                        98,
                        111,
                        108,
                        105,
                        99,
                        32,
                        108,
                        105,
                        110,
                        107,
                        32,
                        108,
                        111,
                        111,
                        112,
                        0,
                        70,
                        105,
                        108,
                        101,
                        110,
                        97,
                        109,
                        101,
                        32,
                        116,
                        111,
                        111,
                        32,
                        108,
                        111,
                        110,
                        103,
                        0,
                        84,
                        111,
                        111,
                        32,
                        109,
                        97,
                        110,
                        121,
                        32,
                        111,
                        112,
                        101,
                        110,
                        32,
                        102,
                        105,
                        108,
                        101,
                        115,
                        32,
                        105,
                        110,
                        32,
                        115,
                        121,
                        115,
                        116,
                        101,
                        109,
                        0,
                        78,
                        111,
                        32,
                        102,
                        105,
                        108,
                        101,
                        32,
                        100,
                        101,
                        115,
                        99,
                        114,
                        105,
                        112,
                        116,
                        111,
                        114,
                        115,
                        32,
                        97,
                        118,
                        97,
                        105,
                        108,
                        97,
                        98,
                        108,
                        101,
                        0,
                        66,
                        97,
                        100,
                        32,
                        102,
                        105,
                        108,
                        101,
                        32,
                        100,
                        101,
                        115,
                        99,
                        114,
                        105,
                        112,
                        116,
                        111,
                        114,
                        0,
                        78,
                        111,
                        32,
                        99,
                        104,
                        105,
                        108,
                        100,
                        32,
                        112,
                        114,
                        111,
                        99,
                        101,
                        115,
                        115,
                        0,
                        66,
                        97,
                        100,
                        32,
                        97,
                        100,
                        100,
                        114,
                        101,
                        115,
                        115,
                        0,
                        70,
                        105,
                        108,
                        101,
                        32,
                        116,
                        111,
                        111,
                        32,
                        108,
                        97,
                        114,
                        103,
                        101,
                        0,
                        84,
                        111,
                        111,
                        32,
                        109,
                        97,
                        110,
                        121,
                        32,
                        108,
                        105,
                        110,
                        107,
                        115,
                        0,
                        78,
                        111,
                        32,
                        108,
                        111,
                        99,
                        107,
                        115,
                        32,
                        97,
                        118,
                        97,
                        105,
                        108,
                        97,
                        98,
                        108,
                        101,
                        0,
                        82,
                        101,
                        115,
                        111,
                        117,
                        114,
                        99,
                        101,
                        32,
                        100,
                        101,
                        97,
                        100,
                        108,
                        111,
                        99,
                        107,
                        32,
                        119,
                        111,
                        117,
                        108,
                        100,
                        32,
                        111,
                        99,
                        99,
                        117,
                        114,
                        0,
                        83,
                        116,
                        97,
                        116,
                        101,
                        32,
                        110,
                        111,
                        116,
                        32,
                        114,
                        101,
                        99,
                        111,
                        118,
                        101,
                        114,
                        97,
                        98,
                        108,
                        101,
                        0,
                        80,
                        114,
                        101,
                        118,
                        105,
                        111,
                        117,
                        115,
                        32,
                        111,
                        119,
                        110,
                        101,
                        114,
                        32,
                        100,
                        105,
                        101,
                        100,
                        0,
                        79,
                        112,
                        101,
                        114,
                        97,
                        116,
                        105,
                        111,
                        110,
                        32,
                        99,
                        97,
                        110,
                        99,
                        101,
                        108,
                        101,
                        100,
                        0,
                        70,
                        117,
                        110,
                        99,
                        116,
                        105,
                        111,
                        110,
                        32,
                        110,
                        111,
                        116,
                        32,
                        105,
                        109,
                        112,
                        108,
                        101,
                        109,
                        101,
                        110,
                        116,
                        101,
                        100,
                        0,
                        78,
                        111,
                        32,
                        109,
                        101,
                        115,
                        115,
                        97,
                        103,
                        101,
                        32,
                        111,
                        102,
                        32,
                        100,
                        101,
                        115,
                        105,
                        114,
                        101,
                        100,
                        32,
                        116,
                        121,
                        112,
                        101,
                        0,
                        73,
                        100,
                        101,
                        110,
                        116,
                        105,
                        102,
                        105,
                        101,
                        114,
                        32,
                        114,
                        101,
                        109,
                        111,
                        118,
                        101,
                        100,
                        0,
                        68,
                        101,
                        118,
                        105,
                        99,
                        101,
                        32,
                        110,
                        111,
                        116,
                        32,
                        97,
                        32,
                        115,
                        116,
                        114,
                        101,
                        97,
                        109,
                        0,
                        78,
                        111,
                        32,
                        100,
                        97,
                        116,
                        97,
                        32,
                        97,
                        118,
                        97,
                        105,
                        108,
                        97,
                        98,
                        108,
                        101,
                        0,
                        68,
                        101,
                        118,
                        105,
                        99,
                        101,
                        32,
                        116,
                        105,
                        109,
                        101,
                        111,
                        117,
                        116,
                        0,
                        79,
                        117,
                        116,
                        32,
                        111,
                        102,
                        32,
                        115,
                        116,
                        114,
                        101,
                        97,
                        109,
                        115,
                        32,
                        114,
                        101,
                        115,
                        111,
                        117,
                        114,
                        99,
                        101,
                        115,
                        0,
                        76,
                        105,
                        110,
                        107,
                        32,
                        104,
                        97,
                        115,
                        32,
                        98,
                        101,
                        101,
                        110,
                        32,
                        115,
                        101,
                        118,
                        101,
                        114,
                        101,
                        100,
                        0,
                        80,
                        114,
                        111,
                        116,
                        111,
                        99,
                        111,
                        108,
                        32,
                        101,
                        114,
                        114,
                        111,
                        114,
                        0,
                        66,
                        97,
                        100,
                        32,
                        109,
                        101,
                        115,
                        115,
                        97,
                        103,
                        101,
                        0,
                        70,
                        105,
                        108,
                        101,
                        32,
                        100,
                        101,
                        115,
                        99,
                        114,
                        105,
                        112,
                        116,
                        111,
                        114,
                        32,
                        105,
                        110,
                        32,
                        98,
                        97,
                        100,
                        32,
                        115,
                        116,
                        97,
                        116,
                        101,
                        0,
                        78,
                        111,
                        116,
                        32,
                        97,
                        32,
                        115,
                        111,
                        99,
                        107,
                        101,
                        116,
                        0,
                        68,
                        101,
                        115,
                        116,
                        105,
                        110,
                        97,
                        116,
                        105,
                        111,
                        110,
                        32,
                        97,
                        100,
                        100,
                        114,
                        101,
                        115,
                        115,
                        32,
                        114,
                        101,
                        113,
                        117,
                        105,
                        114,
                        101,
                        100,
                        0,
                        77,
                        101,
                        115,
                        115,
                        97,
                        103,
                        101,
                        32,
                        116,
                        111,
                        111,
                        32,
                        108,
                        97,
                        114,
                        103,
                        101,
                        0,
                        80,
                        114,
                        111,
                        116,
                        111,
                        99,
                        111,
                        108,
                        32,
                        119,
                        114,
                        111,
                        110,
                        103,
                        32,
                        116,
                        121,
                        112,
                        101,
                        32,
                        102,
                        111,
                        114,
                        32,
                        115,
                        111,
                        99,
                        107,
                        101,
                        116,
                        0,
                        80,
                        114,
                        111,
                        116,
                        111,
                        99,
                        111,
                        108,
                        32,
                        110,
                        111,
                        116,
                        32,
                        97,
                        118,
                        97,
                        105,
                        108,
                        97,
                        98,
                        108,
                        101,
                        0,
                        80,
                        114,
                        111,
                        116,
                        111,
                        99,
                        111,
                        108,
                        32,
                        110,
                        111,
                        116,
                        32,
                        115,
                        117,
                        112,
                        112,
                        111,
                        114,
                        116,
                        101,
                        100,
                        0,
                        83,
                        111,
                        99,
                        107,
                        101,
                        116,
                        32,
                        116,
                        121,
                        112,
                        101,
                        32,
                        110,
                        111,
                        116,
                        32,
                        115,
                        117,
                        112,
                        112,
                        111,
                        114,
                        116,
                        101,
                        100,
                        0,
                        78,
                        111,
                        116,
                        32,
                        115,
                        117,
                        112,
                        112,
                        111,
                        114,
                        116,
                        101,
                        100,
                        0,
                        80,
                        114,
                        111,
                        116,
                        111,
                        99,
                        111,
                        108,
                        32,
                        102,
                        97,
                        109,
                        105,
                        108,
                        121,
                        32,
                        110,
                        111,
                        116,
                        32,
                        115,
                        117,
                        112,
                        112,
                        111,
                        114,
                        116,
                        101,
                        100,
                        0,
                        65,
                        100,
                        100,
                        114,
                        101,
                        115,
                        115,
                        32,
                        102,
                        97,
                        109,
                        105,
                        108,
                        121,
                        32,
                        110,
                        111,
                        116,
                        32,
                        115,
                        117,
                        112,
                        112,
                        111,
                        114,
                        116,
                        101,
                        100,
                        32,
                        98,
                        121,
                        32,
                        112,
                        114,
                        111,
                        116,
                        111,
                        99,
                        111,
                        108,
                        0,
                        65,
                        100,
                        100,
                        114,
                        101,
                        115,
                        115,
                        32,
                        110,
                        111,
                        116,
                        32,
                        97,
                        118,
                        97,
                        105,
                        108,
                        97,
                        98,
                        108,
                        101,
                        0,
                        78,
                        101,
                        116,
                        119,
                        111,
                        114,
                        107,
                        32,
                        105,
                        115,
                        32,
                        100,
                        111,
                        119,
                        110,
                        0,
                        78,
                        101,
                        116,
                        119,
                        111,
                        114,
                        107,
                        32,
                        117,
                        110,
                        114,
                        101,
                        97,
                        99,
                        104,
                        97,
                        98,
                        108,
                        101,
                        0,
                        67,
                        111,
                        110,
                        110,
                        101,
                        99,
                        116,
                        105,
                        111,
                        110,
                        32,
                        114,
                        101,
                        115,
                        101,
                        116,
                        32,
                        98,
                        121,
                        32,
                        110,
                        101,
                        116,
                        119,
                        111,
                        114,
                        107,
                        0,
                        67,
                        111,
                        110,
                        110,
                        101,
                        99,
                        116,
                        105,
                        111,
                        110,
                        32,
                        97,
                        98,
                        111,
                        114,
                        116,
                        101,
                        100,
                        0,
                        78,
                        111,
                        32,
                        98,
                        117,
                        102,
                        102,
                        101,
                        114,
                        32,
                        115,
                        112,
                        97,
                        99,
                        101,
                        32,
                        97,
                        118,
                        97,
                        105,
                        108,
                        97,
                        98,
                        108,
                        101,
                        0,
                        83,
                        111,
                        99,
                        107,
                        101,
                        116,
                        32,
                        105,
                        115,
                        32,
                        99,
                        111,
                        110,
                        110,
                        101,
                        99,
                        116,
                        101,
                        100,
                        0,
                        83,
                        111,
                        99,
                        107,
                        101,
                        116,
                        32,
                        110,
                        111,
                        116,
                        32,
                        99,
                        111,
                        110,
                        110,
                        101,
                        99,
                        116,
                        101,
                        100,
                        0,
                        67,
                        97,
                        110,
                        110,
                        111,
                        116,
                        32,
                        115,
                        101,
                        110,
                        100,
                        32,
                        97,
                        102,
                        116,
                        101,
                        114,
                        32,
                        115,
                        111,
                        99,
                        107,
                        101,
                        116,
                        32,
                        115,
                        104,
                        117,
                        116,
                        100,
                        111,
                        119,
                        110,
                        0,
                        79,
                        112,
                        101,
                        114,
                        97,
                        116,
                        105,
                        111,
                        110,
                        32,
                        97,
                        108,
                        114,
                        101,
                        97,
                        100,
                        121,
                        32,
                        105,
                        110,
                        32,
                        112,
                        114,
                        111,
                        103,
                        114,
                        101,
                        115,
                        115,
                        0,
                        79,
                        112,
                        101,
                        114,
                        97,
                        116,
                        105,
                        111,
                        110,
                        32,
                        105,
                        110,
                        32,
                        112,
                        114,
                        111,
                        103,
                        114,
                        101,
                        115,
                        115,
                        0,
                        83,
                        116,
                        97,
                        108,
                        101,
                        32,
                        102,
                        105,
                        108,
                        101,
                        32,
                        104,
                        97,
                        110,
                        100,
                        108,
                        101,
                        0,
                        82,
                        101,
                        109,
                        111,
                        116,
                        101,
                        32,
                        73,
                        47,
                        79,
                        32,
                        101,
                        114,
                        114,
                        111,
                        114,
                        0,
                        81,
                        117,
                        111,
                        116,
                        97,
                        32,
                        101,
                        120,
                        99,
                        101,
                        101,
                        100,
                        101,
                        100,
                        0,
                        78,
                        111,
                        32,
                        109,
                        101,
                        100,
                        105,
                        117,
                        109,
                        32,
                        102,
                        111,
                        117,
                        110,
                        100,
                        0,
                        87,
                        114,
                        111,
                        110,
                        103,
                        32,
                        109,
                        101,
                        100,
                        105,
                        117,
                        109,
                        32,
                        116,
                        121,
                        112,
                        101,
                        0,
                        78,
                        111,
                        32,
                        101,
                        114,
                        114,
                        111,
                        114,
                        32,
                        105,
                        110,
                        102,
                        111,
                        114,
                        109,
                        97,
                        116,
                        105,
                        111,
                        110,
                        0,
                        0,
                        116,
                        101,
                        114,
                        109,
                        105,
                        110,
                        97,
                        116,
                        105,
                        110,
                        103,
                        32,
                        119,
                        105,
                        116,
                        104,
                        32,
                        37,
                        115,
                        32,
                        101,
                        120,
                        99,
                        101,
                        112,
                        116,
                        105,
                        111,
                        110,
                        32,
                        111,
                        102,
                        32,
                        116,
                        121,
                        112,
                        101,
                        32,
                        37,
                        115,
                        58,
                        32,
                        37,
                        115,
                        0,
                        116,
                        101,
                        114,
                        109,
                        105,
                        110,
                        97,
                        116,
                        105,
                        110,
                        103,
                        32,
                        119,
                        105,
                        116,
                        104,
                        32,
                        37,
                        115,
                        32,
                        101,
                        120,
                        99,
                        101,
                        112,
                        116,
                        105,
                        111,
                        110,
                        32,
                        111,
                        102,
                        32,
                        116,
                        121,
                        112,
                        101,
                        32,
                        37,
                        115,
                        0,
                        116,
                        101,
                        114,
                        109,
                        105,
                        110,
                        97,
                        116,
                        105,
                        110,
                        103,
                        32,
                        119,
                        105,
                        116,
                        104,
                        32,
                        37,
                        115,
                        32,
                        102,
                        111,
                        114,
                        101,
                        105,
                        103,
                        110,
                        32,
                        101,
                        120,
                        99,
                        101,
                        112,
                        116,
                        105,
                        111,
                        110,
                        0,
                        116,
                        101,
                        114,
                        109,
                        105,
                        110,
                        97,
                        116,
                        105,
                        110,
                        103,
                        0,
                        117,
                        110,
                        99,
                        97,
                        117,
                        103,
                        104,
                        116,
                        0,
                        83,
                        116,
                        57,
                        101,
                        120,
                        99,
                        101,
                        112,
                        116,
                        105,
                        111,
                        110,
                        0,
                        78,
                        49,
                        48,
                        95,
                        95,
                        99,
                        120,
                        120,
                        97,
                        98,
                        105,
                        118,
                        49,
                        49,
                        54,
                        95,
                        95,
                        115,
                        104,
                        105,
                        109,
                        95,
                        116,
                        121,
                        112,
                        101,
                        95,
                        105,
                        110,
                        102,
                        111,
                        69,
                        0,
                        83,
                        116,
                        57,
                        116,
                        121,
                        112,
                        101,
                        95,
                        105,
                        110,
                        102,
                        111,
                        0,
                        78,
                        49,
                        48,
                        95,
                        95,
                        99,
                        120,
                        120,
                        97,
                        98,
                        105,
                        118,
                        49,
                        50,
                        48,
                        95,
                        95,
                        115,
                        105,
                        95,
                        99,
                        108,
                        97,
                        115,
                        115,
                        95,
                        116,
                        121,
                        112,
                        101,
                        95,
                        105,
                        110,
                        102,
                        111,
                        69,
                        0,
                        78,
                        49,
                        48,
                        95,
                        95,
                        99,
                        120,
                        120,
                        97,
                        98,
                        105,
                        118,
                        49,
                        49,
                        55,
                        95,
                        95,
                        99,
                        108,
                        97,
                        115,
                        115,
                        95,
                        116,
                        121,
                        112,
                        101,
                        95,
                        105,
                        110,
                        102,
                        111,
                        69,
                        0,
                        112,
                        116,
                        104,
                        114,
                        101,
                        97,
                        100,
                        95,
                        111,
                        110,
                        99,
                        101,
                        32,
                        102,
                        97,
                        105,
                        108,
                        117,
                        114,
                        101,
                        32,
                        105,
                        110,
                        32,
                        95,
                        95,
                        99,
                        120,
                        97,
                        95,
                        103,
                        101,
                        116,
                        95,
                        103,
                        108,
                        111,
                        98,
                        97,
                        108,
                        115,
                        95,
                        102,
                        97,
                        115,
                        116,
                        40,
                        41,
                        0,
                        99,
                        97,
                        110,
                        110,
                        111,
                        116,
                        32,
                        99,
                        114,
                        101,
                        97,
                        116,
                        101,
                        32,
                        112,
                        116,
                        104,
                        114,
                        101,
                        97,
                        100,
                        32,
                        107,
                        101,
                        121,
                        32,
                        102,
                        111,
                        114,
                        32,
                        95,
                        95,
                        99,
                        120,
                        97,
                        95,
                        103,
                        101,
                        116,
                        95,
                        103,
                        108,
                        111,
                        98,
                        97,
                        108,
                        115,
                        40,
                        41,
                        0,
                        99,
                        97,
                        110,
                        110,
                        111,
                        116,
                        32,
                        122,
                        101,
                        114,
                        111,
                        32,
                        111,
                        117,
                        116,
                        32,
                        116,
                        104,
                        114,
                        101,
                        97,
                        100,
                        32,
                        118,
                        97,
                        108,
                        117,
                        101,
                        32,
                        102,
                        111,
                        114,
                        32,
                        95,
                        95,
                        99,
                        120,
                        97,
                        95,
                        103,
                        101,
                        116,
                        95,
                        103,
                        108,
                        111,
                        98,
                        97,
                        108,
                        115,
                        40,
                        41,
                        0,
                        116,
                        101,
                        114,
                        109,
                        105,
                        110,
                        97,
                        116,
                        101,
                        95,
                        104,
                        97,
                        110,
                        100,
                        108,
                        101,
                        114,
                        32,
                        117,
                        110,
                        101,
                        120,
                        112,
                        101,
                        99,
                        116,
                        101,
                        100,
                        108,
                        121,
                        32,
                        114,
                        101,
                        116,
                        117,
                        114,
                        110,
                        101,
                        100,
                        0,
                        78,
                        49,
                        48,
                        95,
                        95,
                        99,
                        120,
                        120,
                        97,
                        98,
                        105,
                        118,
                        49,
                        49,
                        57,
                        95,
                        95,
                        112,
                        111,
                        105,
                        110,
                        116,
                        101,
                        114,
                        95,
                        116,
                        121,
                        112,
                        101,
                        95,
                        105,
                        110,
                        102,
                        111,
                        69,
                        0,
                        78,
                        49,
                        48,
                        95,
                        95,
                        99,
                        120,
                        120,
                        97,
                        98,
                        105,
                        118,
                        49,
                        49,
                        55,
                        95,
                        95,
                        112,
                        98,
                        97,
                        115,
                        101,
                        95,
                        116,
                        121,
                        112,
                        101,
                        95,
                        105,
                        110,
                        102,
                        111,
                        69,
                        0
                    ],
                    "i8",
                    ALLOC_NONE,
                    Runtime.GLOBAL_BASE
                );
            var tempDoublePtr = STATICTOP;
            STATICTOP += 16;
            var EXCEPTIONS = {
                    last: 0,
                    caught: [],
                    infos: {},
                    deAdjust: function(e) {
                        if (!e || EXCEPTIONS.infos[e]) return e;
                        for (var r in EXCEPTIONS.infos) {
                            if (EXCEPTIONS.infos[r].adjusted === e) return r;
                        }
                        return e;
                    },
                    addRef: function(e) {
                        if (e) {
                            EXCEPTIONS.infos[e].refcount++;
                        }
                    },
                    decRef: function(e) {
                        if (e) {
                            var r = EXCEPTIONS.infos[e];
                            assert(r.refcount > 0),
                                r.refcount--,
                                0 !== r.refcount ||
                                    r.rethrown ||
                                    (r.destructor && Module.dynCall_vi(r.destructor, e),
                                    delete EXCEPTIONS.infos[e],
                                    ___cxa_free_exception(e));
                        }
                    },
                    clearRef: function(e) {
                        if (e) {
                            EXCEPTIONS.infos[e].refcount = 0;
                        }
                    }
                },
                SYSCALLS = {
                    varargs: 0,
                    get: function(e) {
                        return (SYSCALLS.varargs += 4), HEAP32[(SYSCALLS.varargs - 4) >> 2];
                    },
                    getStr: function() {
                        return Pointer_stringify(SYSCALLS.get());
                    },
                    get64: function() {
                        var e = SYSCALLS.get(),
                            r = SYSCALLS.get();
                        return assert(e >= 0 ? 0 === r : -1 === r), e;
                    },
                    getZero: function() {
                        assert(0 === SYSCALLS.get());
                    }
                },
                cttz_i8 = allocate(
                    [
                        8,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0,
                        3,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0,
                        4,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0,
                        3,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0,
                        5,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0,
                        3,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0,
                        4,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0,
                        3,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0,
                        6,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0,
                        3,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0,
                        4,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0,
                        3,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0,
                        5,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0,
                        3,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0,
                        4,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0,
                        3,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0,
                        7,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0,
                        3,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0,
                        4,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0,
                        3,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0,
                        5,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0,
                        3,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0,
                        4,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0,
                        3,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0,
                        6,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0,
                        3,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0,
                        4,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0,
                        3,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0,
                        5,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0,
                        3,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0,
                        4,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0,
                        3,
                        0,
                        1,
                        0,
                        2,
                        0,
                        1,
                        0
                    ],
                    "i8",
                    ALLOC_STATIC
                ),
                PTHREAD_SPECIFIC = {},
                PTHREAD_SPECIFIC_NEXT_KEY = 1,
                ERRNO_CODES = {
                    EPERM: 1,
                    ENOENT: 2,
                    ESRCH: 3,
                    EINTR: 4,
                    EIO: 5,
                    ENXIO: 6,
                    E2BIG: 7,
                    ENOEXEC: 8,
                    EBADF: 9,
                    ECHILD: 10,
                    EAGAIN: 11,
                    EWOULDBLOCK: 11,
                    ENOMEM: 12,
                    EACCES: 13,
                    EFAULT: 14,
                    ENOTBLK: 15,
                    EBUSY: 16,
                    EEXIST: 17,
                    EXDEV: 18,
                    ENODEV: 19,
                    ENOTDIR: 20,
                    EISDIR: 21,
                    EINVAL: 22,
                    ENFILE: 23,
                    EMFILE: 24,
                    ENOTTY: 25,
                    ETXTBSY: 26,
                    EFBIG: 27,
                    ENOSPC: 28,
                    ESPIPE: 29,
                    EROFS: 30,
                    EMLINK: 31,
                    EPIPE: 32,
                    EDOM: 33,
                    ERANGE: 34,
                    ENOMSG: 42,
                    EIDRM: 43,
                    ECHRNG: 44,
                    EL2NSYNC: 45,
                    EL3HLT: 46,
                    EL3RST: 47,
                    ELNRNG: 48,
                    EUNATCH: 49,
                    ENOCSI: 50,
                    EL2HLT: 51,
                    EDEADLK: 35,
                    ENOLCK: 37,
                    EBADE: 52,
                    EBADR: 53,
                    EXFULL: 54,
                    ENOANO: 55,
                    EBADRQC: 56,
                    EBADSLT: 57,
                    EDEADLOCK: 35,
                    EBFONT: 59,
                    ENOSTR: 60,
                    ENODATA: 61,
                    ETIME: 62,
                    ENOSR: 63,
                    ENONET: 64,
                    ENOPKG: 65,
                    EREMOTE: 66,
                    ENOLINK: 67,
                    EADV: 68,
                    ESRMNT: 69,
                    ECOMM: 70,
                    EPROTO: 71,
                    EMULTIHOP: 72,
                    EDOTDOT: 73,
                    EBADMSG: 74,
                    ENOTUNIQ: 76,
                    EBADFD: 77,
                    EREMCHG: 78,
                    ELIBACC: 79,
                    ELIBBAD: 80,
                    ELIBSCN: 81,
                    ELIBMAX: 82,
                    ELIBEXEC: 83,
                    ENOSYS: 38,
                    ENOTEMPTY: 39,
                    ENAMETOOLONG: 36,
                    ELOOP: 40,
                    EOPNOTSUPP: 95,
                    EPFNOSUPPORT: 96,
                    ECONNRESET: 104,
                    ENOBUFS: 105,
                    EAFNOSUPPORT: 97,
                    EPROTOTYPE: 91,
                    ENOTSOCK: 88,
                    ENOPROTOOPT: 92,
                    ESHUTDOWN: 108,
                    ECONNREFUSED: 111,
                    EADDRINUSE: 98,
                    ECONNABORTED: 103,
                    ENETUNREACH: 101,
                    ENETDOWN: 100,
                    ETIMEDOUT: 110,
                    EHOSTDOWN: 112,
                    EHOSTUNREACH: 113,
                    EINPROGRESS: 115,
                    EALREADY: 114,
                    EDESTADDRREQ: 89,
                    EMSGSIZE: 90,
                    EPROTONOSUPPORT: 93,
                    ESOCKTNOSUPPORT: 94,
                    EADDRNOTAVAIL: 99,
                    ENETRESET: 102,
                    EISCONN: 106,
                    ENOTCONN: 107,
                    ETOOMANYREFS: 109,
                    EUSERS: 87,
                    EDQUOT: 122,
                    ESTALE: 116,
                    ENOTSUP: 95,
                    ENOMEDIUM: 123,
                    EILSEQ: 84,
                    EOVERFLOW: 75,
                    ECANCELED: 125,
                    ENOTRECOVERABLE: 131,
                    EOWNERDEAD: 130,
                    ESTRPIPE: 86
                };
            __ATEXIT__.push(function() {
                var e = Module._fflush;
                e && e(0);
                var r = ___syscall146.printChar;
                if (r) {
                    var n = ___syscall146.buffers;
                    n[1].length && r(1, 10), n[2].length && r(2, 10);
                }
            }),
                (DYNAMICTOP_PTR = allocate(1, "i32", ALLOC_STATIC)),
                (STACK_BASE = STACKTOP = Runtime.alignMemory(STATICTOP)),
                (STACK_MAX = STACK_BASE + TOTAL_STACK),
                (DYNAMIC_BASE = Runtime.alignMemory(STACK_MAX)),
                (HEAP32[DYNAMICTOP_PTR >> 2] = DYNAMIC_BASE),
                (staticSealed = !0),
                (Module.asmGlobalArg = {
                    Math: Math,
                    Int8Array: Int8Array,
                    Int16Array: Int16Array,
                    Int32Array: Int32Array,
                    Uint8Array: Uint8Array,
                    Uint16Array: Uint16Array,
                    Uint32Array: Uint32Array,
                    Float32Array: Float32Array,
                    Float64Array: Float64Array,
                    NaN: NaN,
                    Infinity: 1 / 0,
                    byteLength: byteLength
                }),
                (Module.asmLibraryArg = {
                    abort: abort,
                    assert: assert,
                    enlargeMemory: enlargeMemory,
                    getTotalMemory: getTotalMemory,
                    abortOnCannotGrowMemory: abortOnCannotGrowMemory,
                    invoke_iiii: invoke_iiii,
                    invoke_viiiii: invoke_viiiii,
                    invoke_vi: invoke_vi,
                    invoke_ii: invoke_ii,
                    invoke_viii: invoke_viii,
                    invoke_v: invoke_v,
                    invoke_viiiiii: invoke_viiiiii,
                    invoke_viiii: invoke_viiii,
                    _pthread_getspecific: _pthread_getspecific,
                    ___syscall54: ___syscall54,
                    _pthread_setspecific: _pthread_setspecific,
                    ___gxx_personality_v0: ___gxx_personality_v0,
                    ___syscall6: ___syscall6,
                    ___setErrNo: ___setErrNo,
                    _abort: _abort,
                    ___cxa_begin_catch: ___cxa_begin_catch,
                    _pthread_once: _pthread_once,
                    _emscripten_memcpy_big: _emscripten_memcpy_big,
                    _pthread_key_create: _pthread_key_create,
                    ___syscall140: ___syscall140,
                    ___resumeException: ___resumeException,
                    ___cxa_find_matching_catch: ___cxa_find_matching_catch,
                    ___syscall146: ___syscall146,
                    __ZSt18uncaught_exceptionv: __ZSt18uncaught_exceptionv,
                    DYNAMICTOP_PTR: DYNAMICTOP_PTR,
                    tempDoublePtr: tempDoublePtr,
                    ABORT: ABORT,
                    STACKTOP: STACKTOP,
                    STACK_MAX: STACK_MAX,
                    cttz_i8: cttz_i8
                });
            var asm = (function(e, r, n) {
                    "almost asm";
                    function t(e) {
                        return (
                            !(16777215 & nn(e) || nn(e) <= 16777215 || nn(e) > 2147483648) &&
                            ((Xr = new Hr(e)),
                            (Yr = new Vr(e)),
                            (Kr = new xr(e)),
                            (Zr = new Wr(e)),
                            (jr = new zr(e)),
                            (Qr = new Jr(e)),
                            ($r = new qr(e)),
                            (rn = new en(e)),
                            (n = e),
                            !0)
                        );
                    }
                    function i(e) {
                        e |= 0;
                        var r = 0,
                            n = 0,
                            t = 0,
                            i = 0,
                            _ = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            E = 0,
                            f = 0,
                            T = 0,
                            c = 0,
                            l = 0,
                            s = 0,
                            A = 0,
                            R = 0,
                            d = 0,
                            M = 0,
                            S = 0,
                            N = 0,
                            I = 0;
                        (I = on), (on = (on + 16) | 0), (c = I);
                        do {
                            if (e >>> 0 < 245) {
                                if (
                                    ((E = e >>> 0 < 11 ? 16 : (e + 11) & -8),
                                    (e = E >>> 3),
                                    (T = 0 | Kr[1144]),
                                    (3 & (n = T >>> e)) | 0)
                                )
                                    return (
                                        (r = (((1 & n) ^ 1) + e) | 0),
                                        (e = (4616 + ((r << 1) << 2)) | 0),
                                        (n = (e + 8) | 0),
                                        (t = 0 | Kr[n >> 2]),
                                        (i = (t + 8) | 0),
                                        (_ = 0 | Kr[i >> 2]),
                                        (0 | e) == (0 | _)
                                            ? (Kr[1144] = T & ~(1 << r))
                                            : ((Kr[(_ + 12) >> 2] = e), (Kr[n >> 2] = _)),
                                        (N = r << 3),
                                        (Kr[(t + 4) >> 2] = 3 | N),
                                        (N = (t + N + 4) | 0),
                                        (Kr[N >> 2] = 1 | Kr[N >> 2]),
                                        (N = i),
                                        (on = I),
                                        0 | N
                                    );
                                if (((f = 0 | Kr[1146]), E >>> 0 > f >>> 0)) {
                                    if (0 | n)
                                        return (
                                            (r = 2 << e),
                                            (r = (n << e) & (r | (0 - r))),
                                            (r = ((r & (0 - r)) - 1) | 0),
                                            (o = (r >>> 12) & 16),
                                            (r >>>= o),
                                            (n = (r >>> 5) & 8),
                                            (r >>>= n),
                                            (i = (r >>> 2) & 4),
                                            (r >>>= i),
                                            (e = (r >>> 1) & 2),
                                            (r >>>= e),
                                            (t = (r >>> 1) & 1),
                                            (t = ((n | o | i | e | t) + (r >>> t)) | 0),
                                            (r = (4616 + ((t << 1) << 2)) | 0),
                                            (e = (r + 8) | 0),
                                            (i = 0 | Kr[e >> 2]),
                                            (o = (i + 8) | 0),
                                            (n = 0 | Kr[o >> 2]),
                                            (0 | r) == (0 | n)
                                                ? ((e = T & ~(1 << t)), (Kr[1144] = e))
                                                : ((Kr[(n + 12) >> 2] = r),
                                                  (Kr[e >> 2] = n),
                                                  (e = T)),
                                            (_ = ((t << 3) - E) | 0),
                                            (Kr[(i + 4) >> 2] = 3 | E),
                                            (t = (i + E) | 0),
                                            (Kr[(t + 4) >> 2] = 1 | _),
                                            (Kr[(t + _) >> 2] = _),
                                            0 | f &&
                                                ((i = 0 | Kr[1149]),
                                                (r = f >>> 3),
                                                (n = (4616 + ((r << 1) << 2)) | 0),
                                                (r = 1 << r),
                                                e & r
                                                    ? ((e = (n + 8) | 0), (r = 0 | Kr[e >> 2]))
                                                    : ((Kr[1144] = e | r),
                                                      (r = n),
                                                      (e = (n + 8) | 0)),
                                                (Kr[e >> 2] = i),
                                                (Kr[(r + 12) >> 2] = i),
                                                (Kr[(i + 8) >> 2] = r),
                                                (Kr[(i + 12) >> 2] = n)),
                                            (Kr[1146] = _),
                                            (Kr[1149] = t),
                                            (N = o),
                                            (on = I),
                                            0 | N
                                        );
                                    if ((a = 0 | Kr[1145])) {
                                        if (
                                            ((n = ((a & (0 - a)) - 1) | 0),
                                            (o = (n >>> 12) & 16),
                                            (n >>>= o),
                                            (_ = (n >>> 5) & 8),
                                            (n >>>= _),
                                            (u = (n >>> 2) & 4),
                                            (n >>>= u),
                                            (t = (n >>> 1) & 2),
                                            (n >>>= t),
                                            (e = (n >>> 1) & 1),
                                            (e =
                                                0 |
                                                Kr[
                                                    (4880 +
                                                        (((_ | o | u | t | e) + (n >>> e)) << 2)) >>
                                                        2
                                                ]),
                                            (n = ((-8 & Kr[(e + 4) >> 2]) - E) | 0),
                                            (t =
                                                0 |
                                                Kr[
                                                    (e +
                                                        16 +
                                                        (((0 == (0 | Kr[(e + 16) >> 2])) & 1) <<
                                                            2)) >>
                                                        2
                                                ]))
                                        ) {
                                            do {
                                                (o = ((-8 & Kr[(t + 4) >> 2]) - E) | 0),
                                                    (u = o >>> 0 < n >>> 0),
                                                    (n = u ? o : n),
                                                    (e = u ? t : e),
                                                    (t =
                                                        0 |
                                                        Kr[
                                                            (t +
                                                                16 +
                                                                (((0 == (0 | Kr[(t + 16) >> 2])) &
                                                                    1) <<
                                                                    2)) >>
                                                                2
                                                        ]);
                                            } while (0 != (0 | t));
                                            (u = e), (_ = n);
                                        } else (u = e), (_ = n);
                                        if (((o = (u + E) | 0), u >>> 0 < o >>> 0)) {
                                            (i = 0 | Kr[(u + 24) >> 2]),
                                                (r = 0 | Kr[(u + 12) >> 2]);
                                            do {
                                                if ((0 | r) == (0 | u)) {
                                                    if (
                                                        ((e = (u + 20) | 0),
                                                        !(
                                                            (r = 0 | Kr[e >> 2]) ||
                                                            ((e = (u + 16) | 0),
                                                            (r = 0 | Kr[e >> 2]))
                                                        ))
                                                    ) {
                                                        n = 0;
                                                        break;
                                                    }
                                                    for (;;)
                                                        if (
                                                            ((n = (r + 20) | 0),
                                                            0 | (t = 0 | Kr[n >> 2]))
                                                        )
                                                            (r = t), (e = n);
                                                        else {
                                                            if (
                                                                ((n = (r + 16) | 0),
                                                                !(t = 0 | Kr[n >> 2]))
                                                            )
                                                                break;
                                                            (r = t), (e = n);
                                                        }
                                                    (Kr[e >> 2] = 0), (n = r);
                                                } else
                                                    (n = 0 | Kr[(u + 8) >> 2]),
                                                        (Kr[(n + 12) >> 2] = r),
                                                        (Kr[(r + 8) >> 2] = n),
                                                        (n = r);
                                            } while (0);
                                            do {
                                                if (0 | i) {
                                                    if (
                                                        ((r = 0 | Kr[(u + 28) >> 2]),
                                                        (e = (4880 + (r << 2)) | 0),
                                                        (0 | u) == (0 | Kr[e >> 2]))
                                                    ) {
                                                        if (((Kr[e >> 2] = n), !n)) {
                                                            Kr[1145] = a & ~(1 << r);
                                                            break;
                                                        }
                                                    } else if (
                                                        ((Kr[
                                                            (i +
                                                                16 +
                                                                ((((0 | Kr[(i + 16) >> 2]) !=
                                                                    (0 | u)) &
                                                                    1) <<
                                                                    2)) >>
                                                                2
                                                        ] = n),
                                                        !n)
                                                    )
                                                        break;
                                                    (Kr[(n + 24) >> 2] = i),
                                                        (r = 0 | Kr[(u + 16) >> 2]),
                                                        0 | r &&
                                                            ((Kr[(n + 16) >> 2] = r),
                                                            (Kr[(r + 24) >> 2] = n)),
                                                        (r = 0 | Kr[(u + 20) >> 2]),
                                                        0 | r &&
                                                            ((Kr[(n + 20) >> 2] = r),
                                                            (Kr[(r + 24) >> 2] = n));
                                                }
                                            } while (0);
                                            return (
                                                _ >>> 0 < 16
                                                    ? ((N = (_ + E) | 0),
                                                      (Kr[(u + 4) >> 2] = 3 | N),
                                                      (N = (u + N + 4) | 0),
                                                      (Kr[N >> 2] = 1 | Kr[N >> 2]))
                                                    : ((Kr[(u + 4) >> 2] = 3 | E),
                                                      (Kr[(o + 4) >> 2] = 1 | _),
                                                      (Kr[(o + _) >> 2] = _),
                                                      0 | f &&
                                                          ((t = 0 | Kr[1149]),
                                                          (r = f >>> 3),
                                                          (n = (4616 + ((r << 1) << 2)) | 0),
                                                          (r = 1 << r),
                                                          T & r
                                                              ? ((e = (n + 8) | 0),
                                                                (r = 0 | Kr[e >> 2]))
                                                              : ((Kr[1144] = T | r),
                                                                (r = n),
                                                                (e = (n + 8) | 0)),
                                                          (Kr[e >> 2] = t),
                                                          (Kr[(r + 12) >> 2] = t),
                                                          (Kr[(t + 8) >> 2] = r),
                                                          (Kr[(t + 12) >> 2] = n)),
                                                      (Kr[1146] = _),
                                                      (Kr[1149] = o)),
                                                (N = (u + 8) | 0),
                                                (on = I),
                                                0 | N
                                            );
                                        }
                                        T = E;
                                    } else T = E;
                                } else T = E;
                            } else if (e >>> 0 <= 4294967231)
                                if (((e = (e + 11) | 0), (E = -8 & e), (u = 0 | Kr[1145]))) {
                                    (t = (0 - E) | 0),
                                        (e >>>= 8),
                                        e
                                            ? E >>> 0 > 16777215
                                                ? (a = 31)
                                                : ((T = (((e + 1048320) | 0) >>> 16) & 8),
                                                  (S = e << T),
                                                  (f = (((S + 520192) | 0) >>> 16) & 4),
                                                  (S <<= f),
                                                  (a = (((S + 245760) | 0) >>> 16) & 2),
                                                  (a = (14 - (f | T | a) + ((S << a) >>> 15)) | 0),
                                                  (a = ((E >>> ((a + 7) | 0)) & 1) | (a << 1)))
                                            : (a = 0),
                                        (n = 0 | Kr[(4880 + (a << 2)) >> 2]);
                                    e: do {
                                        if (n)
                                            for (
                                                e = 0,
                                                    o =
                                                        E <<
                                                        (31 == (0 | a) ? 0 : (25 - (a >>> 1)) | 0),
                                                    _ = 0;
                                                ;

                                            ) {
                                                if (
                                                    (i = ((-8 & Kr[(n + 4) >> 2]) - E) | 0) >>> 0 <
                                                    t >>> 0
                                                ) {
                                                    if (!i) {
                                                        (e = n), (t = 0), (i = n), (S = 61);
                                                        break e;
                                                    }
                                                    (e = n), (t = i);
                                                }
                                                if (
                                                    ((i = 0 | Kr[(n + 20) >> 2]),
                                                    (n = 0 | Kr[(n + 16 + ((o >>> 31) << 2)) >> 2]),
                                                    (_ =
                                                        (0 == (0 | i)) | ((0 | i) == (0 | n))
                                                            ? _
                                                            : i),
                                                    (i = 0 == (0 | n)))
                                                ) {
                                                    (n = _), (S = 57);
                                                    break;
                                                }
                                                o <<= 1 & (1 ^ i);
                                            }
                                        else (n = 0), (e = 0), (S = 57);
                                    } while (0);
                                    if (57 == (0 | S)) {
                                        if ((0 == (0 | n)) & (0 == (0 | e))) {
                                            if (((e = 2 << a), !(e = u & (e | (0 - e))))) {
                                                T = E;
                                                break;
                                            }
                                            (T = ((e & (0 - e)) - 1) | 0),
                                                (o = (T >>> 12) & 16),
                                                (T >>>= o),
                                                (_ = (T >>> 5) & 8),
                                                (T >>>= _),
                                                (a = (T >>> 2) & 4),
                                                (T >>>= a),
                                                (f = (T >>> 1) & 2),
                                                (T >>>= f),
                                                (n = (T >>> 1) & 1),
                                                (e = 0),
                                                (n =
                                                    0 |
                                                    Kr[
                                                        (4880 +
                                                            (((_ | o | a | f | n) + (T >>> n)) <<
                                                                2)) >>
                                                            2
                                                    ]);
                                        }
                                        n ? ((i = n), (S = 61)) : ((a = e), (o = t));
                                    }
                                    if (61 == (0 | S))
                                        for (;;) {
                                            if (
                                                ((S = 0),
                                                (n = ((-8 & Kr[(i + 4) >> 2]) - E) | 0),
                                                (T = n >>> 0 < t >>> 0),
                                                (n = T ? n : t),
                                                (e = T ? i : e),
                                                !(i =
                                                    0 |
                                                    Kr[
                                                        (i +
                                                            16 +
                                                            (((0 == (0 | Kr[(i + 16) >> 2])) & 1) <<
                                                                2)) >>
                                                            2
                                                    ]))
                                            ) {
                                                (a = e), (o = n);
                                                break;
                                            }
                                            (t = n), (S = 61);
                                        }
                                    if (
                                        0 != (0 | a)
                                            ? o >>> 0 < (((0 | Kr[1146]) - E) | 0) >>> 0
                                            : 0
                                    ) {
                                        if (((_ = (a + E) | 0), a >>> 0 >= _ >>> 0))
                                            return (N = 0), (on = I), 0 | N;
                                        (i = 0 | Kr[(a + 24) >> 2]), (r = 0 | Kr[(a + 12) >> 2]);
                                        do {
                                            if ((0 | r) == (0 | a)) {
                                                if (
                                                    ((e = (a + 20) | 0),
                                                    !(
                                                        (r = 0 | Kr[e >> 2]) ||
                                                        ((e = (a + 16) | 0), (r = 0 | Kr[e >> 2]))
                                                    ))
                                                ) {
                                                    r = 0;
                                                    break;
                                                }
                                                for (;;)
                                                    if (
                                                        ((n = (r + 20) | 0),
                                                        0 | (t = 0 | Kr[n >> 2]))
                                                    )
                                                        (r = t), (e = n);
                                                    else {
                                                        if (
                                                            ((n = (r + 16) | 0),
                                                            !(t = 0 | Kr[n >> 2]))
                                                        )
                                                            break;
                                                        (r = t), (e = n);
                                                    }
                                                Kr[e >> 2] = 0;
                                            } else
                                                (N = 0 | Kr[(a + 8) >> 2]),
                                                    (Kr[(N + 12) >> 2] = r),
                                                    (Kr[(r + 8) >> 2] = N);
                                        } while (0);
                                        do {
                                            if (i) {
                                                if (
                                                    ((e = 0 | Kr[(a + 28) >> 2]),
                                                    (n = (4880 + (e << 2)) | 0),
                                                    (0 | a) == (0 | Kr[n >> 2]))
                                                ) {
                                                    if (((Kr[n >> 2] = r), !r)) {
                                                        (t = u & ~(1 << e)), (Kr[1145] = t);
                                                        break;
                                                    }
                                                } else if (
                                                    ((Kr[
                                                        (i +
                                                            16 +
                                                            ((((0 | Kr[(i + 16) >> 2]) != (0 | a)) &
                                                                1) <<
                                                                2)) >>
                                                            2
                                                    ] = r),
                                                    !r)
                                                ) {
                                                    t = u;
                                                    break;
                                                }
                                                (Kr[(r + 24) >> 2] = i),
                                                    (e = 0 | Kr[(a + 16) >> 2]),
                                                    0 | e &&
                                                        ((Kr[(r + 16) >> 2] = e),
                                                        (Kr[(e + 24) >> 2] = r)),
                                                    (e = 0 | Kr[(a + 20) >> 2]),
                                                    e
                                                        ? ((Kr[(r + 20) >> 2] = e),
                                                          (Kr[(e + 24) >> 2] = r),
                                                          (t = u))
                                                        : (t = u);
                                            } else t = u;
                                        } while (0);
                                        do {
                                            if (o >>> 0 >= 16) {
                                                if (
                                                    ((Kr[(a + 4) >> 2] = 3 | E),
                                                    (Kr[(_ + 4) >> 2] = 1 | o),
                                                    (Kr[(_ + o) >> 2] = o),
                                                    (r = o >>> 3),
                                                    o >>> 0 < 256)
                                                ) {
                                                    (n = (4616 + ((r << 1) << 2)) | 0),
                                                        (e = 0 | Kr[1144]),
                                                        (r = 1 << r),
                                                        e & r
                                                            ? ((e = (n + 8) | 0),
                                                              (r = 0 | Kr[e >> 2]))
                                                            : ((Kr[1144] = e | r),
                                                              (r = n),
                                                              (e = (n + 8) | 0)),
                                                        (Kr[e >> 2] = _),
                                                        (Kr[(r + 12) >> 2] = _),
                                                        (Kr[(_ + 8) >> 2] = r),
                                                        (Kr[(_ + 12) >> 2] = n);
                                                    break;
                                                }
                                                if (
                                                    ((r = o >>> 8),
                                                    r
                                                        ? o >>> 0 > 16777215
                                                            ? (r = 31)
                                                            : ((S =
                                                                  (((r + 1048320) | 0) >>> 16) & 8),
                                                              (N = r << S),
                                                              (M = (((N + 520192) | 0) >>> 16) & 4),
                                                              (N <<= M),
                                                              (r = (((N + 245760) | 0) >>> 16) & 2),
                                                              (r =
                                                                  (14 -
                                                                      (M | S | r) +
                                                                      ((N << r) >>> 15)) |
                                                                  0),
                                                              (r =
                                                                  ((o >>> ((r + 7) | 0)) & 1) |
                                                                  (r << 1)))
                                                        : (r = 0),
                                                    (n = (4880 + (r << 2)) | 0),
                                                    (Kr[(_ + 28) >> 2] = r),
                                                    (e = (_ + 16) | 0),
                                                    (Kr[(e + 4) >> 2] = 0),
                                                    (Kr[e >> 2] = 0),
                                                    (e = 1 << r),
                                                    !(t & e))
                                                ) {
                                                    (Kr[1145] = t | e),
                                                        (Kr[n >> 2] = _),
                                                        (Kr[(_ + 24) >> 2] = n),
                                                        (Kr[(_ + 12) >> 2] = _),
                                                        (Kr[(_ + 8) >> 2] = _);
                                                    break;
                                                }
                                                for (
                                                    e =
                                                        o <<
                                                        (31 == (0 | r) ? 0 : (25 - (r >>> 1)) | 0),
                                                        n = 0 | Kr[n >> 2];
                                                    ;

                                                ) {
                                                    if (((-8 & Kr[(n + 4) >> 2]) | 0) == (0 | o)) {
                                                        S = 97;
                                                        break;
                                                    }
                                                    if (
                                                        ((t = (n + 16 + ((e >>> 31) << 2)) | 0),
                                                        !(r = 0 | Kr[t >> 2]))
                                                    ) {
                                                        S = 96;
                                                        break;
                                                    }
                                                    (e <<= 1), (n = r);
                                                }
                                                if (96 == (0 | S)) {
                                                    (Kr[t >> 2] = _),
                                                        (Kr[(_ + 24) >> 2] = n),
                                                        (Kr[(_ + 12) >> 2] = _),
                                                        (Kr[(_ + 8) >> 2] = _);
                                                    break;
                                                }
                                                if (97 == (0 | S)) {
                                                    (S = (n + 8) | 0),
                                                        (N = 0 | Kr[S >> 2]),
                                                        (Kr[(N + 12) >> 2] = _),
                                                        (Kr[S >> 2] = _),
                                                        (Kr[(_ + 8) >> 2] = N),
                                                        (Kr[(_ + 12) >> 2] = n),
                                                        (Kr[(_ + 24) >> 2] = 0);
                                                    break;
                                                }
                                            } else
                                                (N = (o + E) | 0),
                                                    (Kr[(a + 4) >> 2] = 3 | N),
                                                    (N = (a + N + 4) | 0),
                                                    (Kr[N >> 2] = 1 | Kr[N >> 2]);
                                        } while (0);
                                        return (N = (a + 8) | 0), (on = I), 0 | N;
                                    }
                                    T = E;
                                } else T = E;
                            else T = -1;
                        } while (0);
                        if ((n = 0 | Kr[1146]) >>> 0 >= T >>> 0)
                            return (
                                (r = (n - T) | 0),
                                (e = 0 | Kr[1149]),
                                r >>> 0 > 15
                                    ? ((N = (e + T) | 0),
                                      (Kr[1149] = N),
                                      (Kr[1146] = r),
                                      (Kr[(N + 4) >> 2] = 1 | r),
                                      (Kr[(N + r) >> 2] = r),
                                      (Kr[(e + 4) >> 2] = 3 | T))
                                    : ((Kr[1146] = 0),
                                      (Kr[1149] = 0),
                                      (Kr[(e + 4) >> 2] = 3 | n),
                                      (N = (e + n + 4) | 0),
                                      (Kr[N >> 2] = 1 | Kr[N >> 2])),
                                (N = (e + 8) | 0),
                                (on = I),
                                0 | N
                            );
                        if ((o = 0 | Kr[1147]) >>> 0 > T >>> 0)
                            return (
                                (M = (o - T) | 0),
                                (Kr[1147] = M),
                                (N = 0 | Kr[1150]),
                                (S = (N + T) | 0),
                                (Kr[1150] = S),
                                (Kr[(S + 4) >> 2] = 1 | M),
                                (Kr[(N + 4) >> 2] = 3 | T),
                                (N = (N + 8) | 0),
                                (on = I),
                                0 | N
                            );
                        if (
                            (0 | Kr[1262]
                                ? (e = 0 | Kr[1264])
                                : ((Kr[1264] = 4096),
                                  (Kr[1263] = 4096),
                                  (Kr[1265] = -1),
                                  (Kr[1266] = -1),
                                  (Kr[1267] = 0),
                                  (Kr[1255] = 0),
                                  (e = (-16 & c) ^ 1431655768),
                                  (Kr[c >> 2] = e),
                                  (Kr[1262] = e),
                                  (e = 4096)),
                            (a = (T + 48) | 0),
                            (u = (T + 47) | 0),
                            (_ = (e + u) | 0),
                            (i = (0 - e) | 0),
                            (E = _ & i) >>> 0 <= T >>> 0)
                        )
                            return (N = 0), (on = I), 0 | N;
                        if (
                            ((e = 0 | Kr[1254]),
                            0 | e
                                ? ((f = 0 | Kr[1252]),
                                  ((c = (f + E) | 0) >>> 0 <= f >>> 0) | (c >>> 0 > e >>> 0))
                                : 0)
                        )
                            return (N = 0), (on = I), 0 | N;
                        e: do {
                            if (4 & Kr[1255]) (r = 0), (S = 133);
                            else {
                                n = 0 | Kr[1150];
                                r: do {
                                    if (n) {
                                        for (t = 5024; ; ) {
                                            if (
                                                ((e = 0 | Kr[t >> 2]),
                                                e >>> 0 <= n >>> 0
                                                    ? ((A = (t + 4) | 0),
                                                      ((e + (0 | Kr[A >> 2])) | 0) >>> 0 > n >>> 0)
                                                    : 0)
                                            )
                                                break;
                                            if (!(e = 0 | Kr[(t + 8) >> 2])) {
                                                S = 118;
                                                break r;
                                            }
                                            t = e;
                                        }
                                        if ((r = (_ - o) & i) >>> 0 < 2147483647)
                                            if (
                                                (0 | (e = 0 | Ne(0 | r))) ==
                                                (((0 | Kr[t >> 2]) + (0 | Kr[A >> 2])) | 0)
                                            ) {
                                                if (-1 != (0 | e)) {
                                                    (o = r), (_ = e), (S = 135);
                                                    break e;
                                                }
                                            } else (t = e), (S = 126);
                                        else r = 0;
                                    } else S = 118;
                                } while (0);
                                do {
                                    if (118 == (0 | S))
                                        if (
                                            ((n = 0 | Ne(0)),
                                            -1 != (0 | n)
                                                ? ((r = n),
                                                  (l = 0 | Kr[1263]),
                                                  (s = (l + -1) | 0),
                                                  (r =
                                                      ((0 == ((s & r) | 0)
                                                          ? 0
                                                          : (((s + r) & (0 - l)) - r) | 0) +
                                                          E) |
                                                      0),
                                                  (l = 0 | Kr[1252]),
                                                  (s = (r + l) | 0),
                                                  (r >>> 0 > T >>> 0) & (r >>> 0 < 2147483647))
                                                : 0)
                                        ) {
                                            if (
                                                ((A = 0 | Kr[1254]),
                                                0 | A
                                                    ? (s >>> 0 <= l >>> 0) | (s >>> 0 > A >>> 0)
                                                    : 0)
                                            ) {
                                                r = 0;
                                                break;
                                            }
                                            if ((0 | (e = 0 | Ne(0 | r))) == (0 | n)) {
                                                (o = r), (_ = n), (S = 135);
                                                break e;
                                            }
                                            (t = e), (S = 126);
                                        } else r = 0;
                                } while (0);
                                do {
                                    if (126 == (0 | S)) {
                                        if (
                                            ((n = (0 - r) | 0),
                                            !(
                                                (a >>> 0 > r >>> 0) &
                                                (r >>> 0 < 2147483647) &
                                                (-1 != (0 | t))
                                            ))
                                        ) {
                                            if (-1 == (0 | t)) {
                                                r = 0;
                                                break;
                                            }
                                            (o = r), (_ = t), (S = 135);
                                            break e;
                                        }
                                        if (
                                            ((e = 0 | Kr[1264]),
                                            (e = (u - r + e) & (0 - e)) >>> 0 >= 2147483647)
                                        ) {
                                            (o = r), (_ = t), (S = 135);
                                            break e;
                                        }
                                        if (-1 == (0 | Ne(0 | e))) {
                                            Ne(0 | n), (r = 0);
                                            break;
                                        }
                                        (o = (e + r) | 0), (_ = t), (S = 135);
                                        break e;
                                    }
                                } while (0);
                                (Kr[1255] = 4 | Kr[1255]), (S = 133);
                            }
                        } while (0);
                        if (
                            (!(133 == (0 | S) ? E >>> 0 < 2147483647 : 0) ||
                                ((M = 0 | Ne(0 | E)),
                                (A = 0 | Ne(0)),
                                (R = (A - M) | 0),
                                (d = R >>> 0 > ((T + 40) | 0) >>> 0),
                                (-1 == (0 | M)) |
                                    (1 ^ d) |
                                    (((M >>> 0 < A >>> 0) & (-1 != (0 | M)) & (-1 != (0 | A))) ^
                                        1)) ||
                                ((o = d ? R : r), (_ = M), (S = 135)),
                            135 == (0 | S))
                        ) {
                            (r = ((0 | Kr[1252]) + o) | 0),
                                (Kr[1252] = r),
                                r >>> 0 > (0 | Kr[1253]) >>> 0 && (Kr[1253] = r),
                                (u = 0 | Kr[1150]);
                            do {
                                if (u) {
                                    for (r = 5024; ; ) {
                                        if (
                                            ((e = 0 | Kr[r >> 2]),
                                            (n = (r + 4) | 0),
                                            (t = 0 | Kr[n >> 2]),
                                            (0 | _) == ((e + t) | 0))
                                        ) {
                                            S = 145;
                                            break;
                                        }
                                        if (!(i = 0 | Kr[(r + 8) >> 2])) break;
                                        r = i;
                                    }
                                    if (
                                        (145 == (0 | S)
                                          ? 0 == ((8 & Kr[(r + 12) >> 2]) | 0)
                                          : 0)
                                            ? (u >>> 0 < _ >>> 0) & (u >>> 0 >= e >>> 0)
                                            : 0
                                    ) {
                                        (Kr[n >> 2] = t + o),
                                            (N = (u + 8) | 0),
                                            (N = 0 == ((7 & N) | 0) ? 0 : (0 - N) & 7),
                                            (S = (u + N) | 0),
                                            (N = ((0 | Kr[1147]) + (o - N)) | 0),
                                            (Kr[1150] = S),
                                            (Kr[1147] = N),
                                            (Kr[(S + 4) >> 2] = 1 | N),
                                            (Kr[(S + N + 4) >> 2] = 40),
                                            (Kr[1151] = Kr[1266]);
                                        break;
                                    }
                                    for (
                                        _ >>> 0 < (0 | Kr[1148]) >>> 0 && (Kr[1148] = _),
                                            n = (_ + o) | 0,
                                            r = 5024;
                                        ;

                                    ) {
                                        if ((0 | Kr[r >> 2]) == (0 | n)) {
                                            S = 153;
                                            break;
                                        }
                                        if (!(e = 0 | Kr[(r + 8) >> 2])) break;
                                        r = e;
                                    }
                                    if (153 == (0 | S) ? 0 == ((8 & Kr[(r + 12) >> 2]) | 0) : 0) {
                                        (Kr[r >> 2] = _),
                                            (f = (r + 4) | 0),
                                            (Kr[f >> 2] = (0 | Kr[f >> 2]) + o),
                                            (f = (_ + 8) | 0),
                                            (f = (_ + (0 == ((7 & f) | 0) ? 0 : (0 - f) & 7)) | 0),
                                            (r = (n + 8) | 0),
                                            (r = (n + (0 == ((7 & r) | 0) ? 0 : (0 - r) & 7)) | 0),
                                            (E = (f + T) | 0),
                                            (a = (r - f - T) | 0),
                                            (Kr[(f + 4) >> 2] = 3 | T);
                                        do {
                                            if ((0 | r) != (0 | u)) {
                                                if ((0 | r) == (0 | Kr[1149])) {
                                                    (N = ((0 | Kr[1146]) + a) | 0),
                                                        (Kr[1146] = N),
                                                        (Kr[1149] = E),
                                                        (Kr[(E + 4) >> 2] = 1 | N),
                                                        (Kr[(E + N) >> 2] = N);
                                                    break;
                                                }
                                                if (1 == ((3 & (e = 0 | Kr[(r + 4) >> 2])) | 0)) {
                                                    (o = -8 & e), (t = e >>> 3);
                                                    e: do {
                                                        if (e >>> 0 < 256) {
                                                            if (
                                                                ((e = 0 | Kr[(r + 8) >> 2]),
                                                                (0 | (n = 0 | Kr[(r + 12) >> 2])) ==
                                                                    (0 | e))
                                                            ) {
                                                                Kr[1144] = Kr[1144] & ~(1 << t);
                                                                break;
                                                            }
                                                            (Kr[(e + 12) >> 2] = n),
                                                                (Kr[(n + 8) >> 2] = e);
                                                            break;
                                                        }
                                                        (_ = 0 | Kr[(r + 24) >> 2]),
                                                            (e = 0 | Kr[(r + 12) >> 2]);
                                                        do {
                                                            if ((0 | e) == (0 | r)) {
                                                                if (
                                                                    ((t = (r + 16) | 0),
                                                                    (n = (t + 4) | 0),
                                                                    !(e = 0 | Kr[n >> 2]))
                                                                ) {
                                                                    if (!(e = 0 | Kr[t >> 2])) {
                                                                        e = 0;
                                                                        break;
                                                                    }
                                                                    n = t;
                                                                }
                                                                for (;;)
                                                                    if (
                                                                        ((t = (e + 20) | 0),
                                                                        0 | (i = 0 | Kr[t >> 2]))
                                                                    )
                                                                        (e = i), (n = t);
                                                                    else {
                                                                        if (
                                                                            ((t = (e + 16) | 0),
                                                                            !(i = 0 | Kr[t >> 2]))
                                                                        )
                                                                            break;
                                                                        (e = i), (n = t);
                                                                    }
                                                                Kr[n >> 2] = 0;
                                                            } else
                                                                (N = 0 | Kr[(r + 8) >> 2]),
                                                                    (Kr[(N + 12) >> 2] = e),
                                                                    (Kr[(e + 8) >> 2] = N);
                                                        } while (0);
                                                        if (!_) break;
                                                        (n = 0 | Kr[(r + 28) >> 2]),
                                                            (t = (4880 + (n << 2)) | 0);
                                                        do {
                                                            if ((0 | r) == (0 | Kr[t >> 2])) {
                                                                if (((Kr[t >> 2] = e), 0 | e))
                                                                    break;
                                                                Kr[1145] = Kr[1145] & ~(1 << n);
                                                                break e;
                                                            }
                                                            if (
                                                                ((Kr[
                                                                    (_ +
                                                                        16 +
                                                                        ((((0 |
                                                                            Kr[(_ + 16) >> 2]) !=
                                                                            (0 | r)) &
                                                                            1) <<
                                                                            2)) >>
                                                                        2
                                                                ] = e),
                                                                !e)
                                                            )
                                                                break e;
                                                        } while (0);
                                                        if (
                                                            ((Kr[(e + 24) >> 2] = _),
                                                            (n = (r + 16) | 0),
                                                            (t = 0 | Kr[n >> 2]),
                                                            0 | t &&
                                                                ((Kr[(e + 16) >> 2] = t),
                                                                (Kr[(t + 24) >> 2] = e)),
                                                            !(n = 0 | Kr[(n + 4) >> 2]))
                                                        )
                                                            break;
                                                        (Kr[(e + 20) >> 2] = n),
                                                            (Kr[(n + 24) >> 2] = e);
                                                    } while (0);
                                                    (r = (r + o) | 0), (i = (o + a) | 0);
                                                } else i = a;
                                                if (
                                                    ((r = (r + 4) | 0),
                                                    (Kr[r >> 2] = -2 & Kr[r >> 2]),
                                                    (Kr[(E + 4) >> 2] = 1 | i),
                                                    (Kr[(E + i) >> 2] = i),
                                                    (r = i >>> 3),
                                                    i >>> 0 < 256)
                                                ) {
                                                    (n = (4616 + ((r << 1) << 2)) | 0),
                                                        (e = 0 | Kr[1144]),
                                                        (r = 1 << r),
                                                        e & r
                                                            ? ((e = (n + 8) | 0),
                                                              (r = 0 | Kr[e >> 2]))
                                                            : ((Kr[1144] = e | r),
                                                              (r = n),
                                                              (e = (n + 8) | 0)),
                                                        (Kr[e >> 2] = E),
                                                        (Kr[(r + 12) >> 2] = E),
                                                        (Kr[(E + 8) >> 2] = r),
                                                        (Kr[(E + 12) >> 2] = n);
                                                    break;
                                                }
                                                r = i >>> 8;
                                                do {
                                                    if (r) {
                                                        if (i >>> 0 > 16777215) {
                                                            r = 31;
                                                            break;
                                                        }
                                                        (S = (((r + 1048320) | 0) >>> 16) & 8),
                                                            (N = r << S),
                                                            (M = (((N + 520192) | 0) >>> 16) & 4),
                                                            (N <<= M),
                                                            (r = (((N + 245760) | 0) >>> 16) & 2),
                                                            (r =
                                                                (14 -
                                                                    (M | S | r) +
                                                                    ((N << r) >>> 15)) |
                                                                0),
                                                            (r =
                                                                ((i >>> ((r + 7) | 0)) & 1) |
                                                                (r << 1));
                                                    } else r = 0;
                                                } while (0);
                                                if (
                                                    ((t = (4880 + (r << 2)) | 0),
                                                    (Kr[(E + 28) >> 2] = r),
                                                    (e = (E + 16) | 0),
                                                    (Kr[(e + 4) >> 2] = 0),
                                                    (Kr[e >> 2] = 0),
                                                    (e = 0 | Kr[1145]),
                                                    (n = 1 << r),
                                                    !(e & n))
                                                ) {
                                                    (Kr[1145] = e | n),
                                                        (Kr[t >> 2] = E),
                                                        (Kr[(E + 24) >> 2] = t),
                                                        (Kr[(E + 12) >> 2] = E),
                                                        (Kr[(E + 8) >> 2] = E);
                                                    break;
                                                }
                                                for (
                                                    e =
                                                        i <<
                                                        (31 == (0 | r) ? 0 : (25 - (r >>> 1)) | 0),
                                                        n = 0 | Kr[t >> 2];
                                                    ;

                                                ) {
                                                    if (((-8 & Kr[(n + 4) >> 2]) | 0) == (0 | i)) {
                                                        S = 194;
                                                        break;
                                                    }
                                                    if (
                                                        ((t = (n + 16 + ((e >>> 31) << 2)) | 0),
                                                        !(r = 0 | Kr[t >> 2]))
                                                    ) {
                                                        S = 193;
                                                        break;
                                                    }
                                                    (e <<= 1), (n = r);
                                                }
                                                if (193 == (0 | S)) {
                                                    (Kr[t >> 2] = E),
                                                        (Kr[(E + 24) >> 2] = n),
                                                        (Kr[(E + 12) >> 2] = E),
                                                        (Kr[(E + 8) >> 2] = E);
                                                    break;
                                                }
                                                if (194 == (0 | S)) {
                                                    (S = (n + 8) | 0),
                                                        (N = 0 | Kr[S >> 2]),
                                                        (Kr[(N + 12) >> 2] = E),
                                                        (Kr[S >> 2] = E),
                                                        (Kr[(E + 8) >> 2] = N),
                                                        (Kr[(E + 12) >> 2] = n),
                                                        (Kr[(E + 24) >> 2] = 0);
                                                    break;
                                                }
                                            } else
                                                (N = ((0 | Kr[1147]) + a) | 0),
                                                    (Kr[1147] = N),
                                                    (Kr[1150] = E),
                                                    (Kr[(E + 4) >> 2] = 1 | N);
                                        } while (0);
                                        return (N = (f + 8) | 0), (on = I), 0 | N;
                                    }
                                    for (r = 5024; ; ) {
                                        if (
                                            ((e = 0 | Kr[r >> 2]),
                                            e >>> 0 <= u >>> 0
                                                ? (N = (e + (0 | Kr[(r + 4) >> 2])) | 0) >>> 0 >
                                                  u >>> 0
                                                : 0)
                                        )
                                            break;
                                        r = 0 | Kr[(r + 8) >> 2];
                                    }
                                    (i = (N + -47) | 0),
                                        (e = (i + 8) | 0),
                                        (e = (i + (0 == ((7 & e) | 0) ? 0 : (0 - e) & 7)) | 0),
                                        (i = (u + 16) | 0),
                                        (e = e >>> 0 < i >>> 0 ? u : e),
                                        (r = (e + 8) | 0),
                                        (n = (_ + 8) | 0),
                                        (n = 0 == ((7 & n) | 0) ? 0 : (0 - n) & 7),
                                        (S = (_ + n) | 0),
                                        (n = (o + -40 - n) | 0),
                                        (Kr[1150] = S),
                                        (Kr[1147] = n),
                                        (Kr[(S + 4) >> 2] = 1 | n),
                                        (Kr[(S + n + 4) >> 2] = 40),
                                        (Kr[1151] = Kr[1266]),
                                        (n = (e + 4) | 0),
                                        (Kr[n >> 2] = 27),
                                        (Kr[r >> 2] = Kr[1256]),
                                        (Kr[(r + 4) >> 2] = Kr[1257]),
                                        (Kr[(r + 8) >> 2] = Kr[1258]),
                                        (Kr[(r + 12) >> 2] = Kr[1259]),
                                        (Kr[1256] = _),
                                        (Kr[1257] = o),
                                        (Kr[1259] = 0),
                                        (Kr[1258] = r),
                                        (r = (e + 24) | 0);
                                    do {
                                        (S = r), (r = (r + 4) | 0), (Kr[r >> 2] = 7);
                                    } while (((S + 8) | 0) >>> 0 < N >>> 0);
                                    if ((0 | e) != (0 | u)) {
                                        if (
                                            ((_ = (e - u) | 0),
                                            (Kr[n >> 2] = -2 & Kr[n >> 2]),
                                            (Kr[(u + 4) >> 2] = 1 | _),
                                            (Kr[e >> 2] = _),
                                            (r = _ >>> 3),
                                            _ >>> 0 < 256)
                                        ) {
                                            (n = (4616 + ((r << 1) << 2)) | 0),
                                                (e = 0 | Kr[1144]),
                                                (r = 1 << r),
                                                e & r
                                                    ? ((e = (n + 8) | 0), (r = 0 | Kr[e >> 2]))
                                                    : ((Kr[1144] = e | r),
                                                      (r = n),
                                                      (e = (n + 8) | 0)),
                                                (Kr[e >> 2] = u),
                                                (Kr[(r + 12) >> 2] = u),
                                                (Kr[(u + 8) >> 2] = r),
                                                (Kr[(u + 12) >> 2] = n);
                                            break;
                                        }
                                        if (
                                            ((r = _ >>> 8),
                                            r
                                                ? _ >>> 0 > 16777215
                                                    ? (n = 31)
                                                    : ((S = (((r + 1048320) | 0) >>> 16) & 8),
                                                      (N = r << S),
                                                      (M = (((N + 520192) | 0) >>> 16) & 4),
                                                      (N <<= M),
                                                      (n = (((N + 245760) | 0) >>> 16) & 2),
                                                      (n =
                                                          (14 - (M | S | n) + ((N << n) >>> 15)) |
                                                          0),
                                                      (n = ((_ >>> ((n + 7) | 0)) & 1) | (n << 1)))
                                                : (n = 0),
                                            (t = (4880 + (n << 2)) | 0),
                                            (Kr[(u + 28) >> 2] = n),
                                            (Kr[(u + 20) >> 2] = 0),
                                            (Kr[i >> 2] = 0),
                                            (r = 0 | Kr[1145]),
                                            (e = 1 << n),
                                            !(r & e))
                                        ) {
                                            (Kr[1145] = r | e),
                                                (Kr[t >> 2] = u),
                                                (Kr[(u + 24) >> 2] = t),
                                                (Kr[(u + 12) >> 2] = u),
                                                (Kr[(u + 8) >> 2] = u);
                                            break;
                                        }
                                        for (
                                            e = _ << (31 == (0 | n) ? 0 : (25 - (n >>> 1)) | 0),
                                                n = 0 | Kr[t >> 2];
                                            ;

                                        ) {
                                            if (((-8 & Kr[(n + 4) >> 2]) | 0) == (0 | _)) {
                                                S = 216;
                                                break;
                                            }
                                            if (
                                                ((t = (n + 16 + ((e >>> 31) << 2)) | 0),
                                                !(r = 0 | Kr[t >> 2]))
                                            ) {
                                                S = 215;
                                                break;
                                            }
                                            (e <<= 1), (n = r);
                                        }
                                        if (215 == (0 | S)) {
                                            (Kr[t >> 2] = u),
                                                (Kr[(u + 24) >> 2] = n),
                                                (Kr[(u + 12) >> 2] = u),
                                                (Kr[(u + 8) >> 2] = u);
                                            break;
                                        }
                                        if (216 == (0 | S)) {
                                            (S = (n + 8) | 0),
                                                (N = 0 | Kr[S >> 2]),
                                                (Kr[(N + 12) >> 2] = u),
                                                (Kr[S >> 2] = u),
                                                (Kr[(u + 8) >> 2] = N),
                                                (Kr[(u + 12) >> 2] = n),
                                                (Kr[(u + 24) >> 2] = 0);
                                            break;
                                        }
                                    }
                                } else {
                                    (N = 0 | Kr[1148]),
                                        (0 == (0 | N)) | (_ >>> 0 < N >>> 0) && (Kr[1148] = _),
                                        (Kr[1256] = _),
                                        (Kr[1257] = o),
                                        (Kr[1259] = 0),
                                        (Kr[1153] = Kr[1262]),
                                        (Kr[1152] = -1),
                                        (r = 0);
                                    do {
                                        (N = (4616 + ((r << 1) << 2)) | 0),
                                            (Kr[(N + 12) >> 2] = N),
                                            (Kr[(N + 8) >> 2] = N),
                                            (r = (r + 1) | 0);
                                    } while (32 != (0 | r));
                                    (N = (_ + 8) | 0),
                                        (N = 0 == ((7 & N) | 0) ? 0 : (0 - N) & 7),
                                        (S = (_ + N) | 0),
                                        (N = (o + -40 - N) | 0),
                                        (Kr[1150] = S),
                                        (Kr[1147] = N),
                                        (Kr[(S + 4) >> 2] = 1 | N),
                                        (Kr[(S + N + 4) >> 2] = 40),
                                        (Kr[1151] = Kr[1266]);
                                }
                            } while (0);
                            if ((r = 0 | Kr[1147]) >>> 0 > T >>> 0)
                                return (
                                    (M = (r - T) | 0),
                                    (Kr[1147] = M),
                                    (N = 0 | Kr[1150]),
                                    (S = (N + T) | 0),
                                    (Kr[1150] = S),
                                    (Kr[(S + 4) >> 2] = 1 | M),
                                    (Kr[(N + 4) >> 2] = 3 | T),
                                    (N = (N + 8) | 0),
                                    (on = I),
                                    0 | N
                                );
                        }
                        return (N = 0 | Pr()), (Kr[N >> 2] = 12), (N = 0), (on = I), 0 | N;
                    }
                    function _(e, r, n, t, i, _) {
                        (e |= 0), (r = +r), (n |= 0), (t |= 0), (i |= 0), (_ |= 0);
                        var o = 0,
                            a = 0,
                            u = 0,
                            E = 0,
                            f = 0,
                            T = 0,
                            c = 0,
                            l = 0,
                            s = 0,
                            A = 0,
                            R = 0,
                            d = 0,
                            M = 0,
                            S = 0,
                            N = 0,
                            I = 0,
                            O = 0,
                            C = 0,
                            h = 0,
                            P = 0,
                            L = 0,
                            b = 0,
                            F = 0;
                        (F = on),
                            (on = (on + 560) | 0),
                            (u = (F + 8) | 0),
                            (R = F),
                            (b = (F + 524) | 0),
                            (L = b),
                            (E = (F + 512) | 0),
                            (Kr[R >> 2] = 0),
                            (P = (E + 12) | 0),
                            Je(r),
                            (0 | Tn) < 0
                                ? ((r = -r), (C = 1), (O = 2087))
                                : ((C = (0 != ((2049 & i) | 0)) & 1),
                                  (O =
                                      0 == ((2048 & i) | 0)
                                          ? 0 == ((1 & i) | 0)
                                              ? 2088
                                              : 2093
                                          : 2090)),
                            Je(r),
                            (h = 2146435072 & Tn);
                        do {
                            if ((h >>> 0 < 2146435072) | ((2146435072 == (0 | h)) & !1)) {
                                if (
                                    ((l = 2 * +Cr(r, R)),
                                    (o = 0 != l),
                                    o && (Kr[R >> 2] = (0 | Kr[R >> 2]) - 1),
                                    97 == (0 | (M = 32 | _)))
                                ) {
                                    (s = 32 & _),
                                        (c = 0 == (0 | s) ? O : (O + 9) | 0),
                                        (T = 2 | C),
                                        (o = (12 - t) | 0);
                                    do {
                                        if (!((t >>> 0 > 11) | (0 == (0 | o)))) {
                                            r = 8;
                                            do {
                                                (o = (o + -1) | 0), (r *= 16);
                                            } while (0 != (0 | o));
                                            if (45 == (0 | Xr[c >> 0])) {
                                                r = -(r + (-l - r));
                                                break;
                                            }
                                            r = l + r - r;
                                            break;
                                        }
                                        r = l;
                                    } while (0);
                                    (a = 0 | Kr[R >> 2]),
                                        (o = (0 | a) < 0 ? (0 - a) | 0 : a),
                                        (o = 0 | Ee(o, (((0 | o) < 0) << 31) >> 31, P)),
                                        (0 | o) == (0 | P) &&
                                            ((o = (E + 11) | 0), (Xr[o >> 0] = 48)),
                                        (Xr[(o + -1) >> 0] = 43 + ((a >> 31) & 2)),
                                        (f = (o + -2) | 0),
                                        (Xr[f >> 0] = _ + 15),
                                        (E = (0 | t) < 1),
                                        (u = 0 == ((8 & i) | 0)),
                                        (o = b);
                                    do {
                                        (h = ~~r),
                                            (a = (o + 1) | 0),
                                            (Xr[o >> 0] = Zr[(2122 + h) >> 0] | s),
                                            (r = 16 * (r - +(0 | h))),
                                            1 != ((a - L) | 0) || u & E & (0 == r)
                                                ? (o = a)
                                                : ((Xr[a >> 0] = 46), (o = (o + 2) | 0));
                                    } while (0 != r);
                                    (h = (o - L) | 0),
                                        (L = (P - f) | 0),
                                        (P =
                                            (0 != (0 | t)) & (((h + -2) | 0) < (0 | t))
                                                ? (t + 2) | 0
                                                : h),
                                        (o = (L + T + P) | 0),
                                        se(e, 32, n, o, i),
                                        tr(e, c, T),
                                        se(e, 48, n, o, 65536 ^ i),
                                        tr(e, b, h),
                                        se(e, 48, (P - h) | 0, 0, 0),
                                        tr(e, f, L),
                                        se(e, 32, n, o, 8192 ^ i);
                                    break;
                                }
                                (a = (0 | t) < 0 ? 6 : t),
                                    o
                                        ? ((o = ((0 | Kr[R >> 2]) - 28) | 0),
                                          (Kr[R >> 2] = o),
                                          (r = 268435456 * l))
                                        : ((r = l), (o = 0 | Kr[R >> 2])),
                                    (h = (0 | o) < 0 ? u : (u + 288) | 0),
                                    (u = h);
                                do {
                                    (N = ~~r >>> 0),
                                        (Kr[u >> 2] = N),
                                        (u = (u + 4) | 0),
                                        (r = 1e9 * (r - +(N >>> 0)));
                                } while (0 != r);
                                if ((0 | o) > 0)
                                    for (E = h, T = u; ; ) {
                                        if (
                                            ((f = (0 | o) < 29 ? o : 29),
                                            (o = (T + -4) | 0) >>> 0 >= E >>> 0)
                                        ) {
                                            u = 0;
                                            do {
                                                (S = 0 | Ye(0 | Kr[o >> 2], 0, 0 | f)),
                                                    (S = 0 | Qe(0 | S, 0 | Tn, 0 | u, 0)),
                                                    (N = Tn),
                                                    (d = 0 | De(0 | S, 0 | N, 1e9, 0)),
                                                    (Kr[o >> 2] = d),
                                                    (u = 0 | fr(0 | S, 0 | N, 1e9, 0)),
                                                    (o = (o + -4) | 0);
                                            } while (o >>> 0 >= E >>> 0);
                                            u && ((E = (E + -4) | 0), (Kr[E >> 2] = u));
                                        }
                                        for (u = T; ; ) {
                                            if (u >>> 0 <= E >>> 0) break;
                                            if (((o = (u + -4) | 0), 0 | Kr[o >> 2])) break;
                                            u = o;
                                        }
                                        if (
                                            ((o = ((0 | Kr[R >> 2]) - f) | 0),
                                            (Kr[R >> 2] = o),
                                            !((0 | o) > 0))
                                        )
                                            break;
                                        T = u;
                                    }
                                else E = h;
                                if ((0 | o) < 0) {
                                    (t = (1 + ((((a + 25) | 0) / 9) | 0)) | 0),
                                        (A = 102 == (0 | M));
                                    do {
                                        if (
                                            ((s = (0 - o) | 0),
                                            (s = (0 | s) < 9 ? s : 9),
                                            E >>> 0 < u >>> 0)
                                        ) {
                                            (f = ((1 << s) - 1) | 0),
                                                (T = 1e9 >>> s),
                                                (c = 0),
                                                (o = E);
                                            do {
                                                (N = 0 | Kr[o >> 2]),
                                                    (Kr[o >> 2] = (N >>> s) + c),
                                                    (c = 0 | cn(N & f, T)),
                                                    (o = (o + 4) | 0);
                                            } while (o >>> 0 < u >>> 0);
                                            (o = 0 == (0 | Kr[E >> 2]) ? (E + 4) | 0 : E),
                                                c
                                                    ? ((Kr[u >> 2] = c), (E = o), (o = (u + 4) | 0))
                                                    : ((E = o), (o = u));
                                        } else
                                            (E = 0 == (0 | Kr[E >> 2]) ? (E + 4) | 0 : E), (o = u);
                                        (u = A ? h : E),
                                            (u =
                                                (((o - u) >> 2) | 0) > (0 | t)
                                                    ? (u + (t << 2)) | 0
                                                    : o),
                                            (o = ((0 | Kr[R >> 2]) + s) | 0),
                                            (Kr[R >> 2] = o);
                                    } while ((0 | o) < 0);
                                    (o = E), (t = u);
                                } else (o = E), (t = u);
                                if (((N = h), o >>> 0 < t >>> 0)) {
                                    if (
                                        ((u = (9 * ((N - o) >> 2)) | 0),
                                        (f = 0 | Kr[o >> 2]) >>> 0 >= 10)
                                    ) {
                                        E = 10;
                                        do {
                                            (E = (10 * E) | 0), (u = (u + 1) | 0);
                                        } while (f >>> 0 >= E >>> 0);
                                    }
                                } else u = 0;
                                if (
                                    ((A = 103 == (0 | M)),
                                    (d = 0 != (0 | a)),
                                    (0 |
                                        (E =
                                            (a -
                                                (102 != (0 | M) ? u : 0) +
                                                (((d & A) << 31) >> 31)) |
                                            0)) <
                                        ((((9 * ((t - N) >> 2)) | 0) - 9) | 0))
                                ) {
                                    if (
                                        ((E = (E + 9216) | 0),
                                        (s = (h + 4 + (((((0 | E) / 9) | 0) - 1024) << 2)) | 0),
                                        (0 | (E = (1 + ((0 | E) % 9 | 0)) | 0)) < 9)
                                    ) {
                                        f = 10;
                                        do {
                                            (f = (10 * f) | 0), (E = (E + 1) | 0);
                                        } while (9 != (0 | E));
                                    } else f = 10;
                                    if (
                                        ((T = 0 | Kr[s >> 2]),
                                        (c = (T >>> 0) % (f >>> 0) | 0),
                                        (E = ((s + 4) | 0) == (0 | t)) & (0 == (0 | c)))
                                    )
                                        E = s;
                                    else if (
                                        ((l =
                                            0 == ((1 & (((T >>> 0) / (f >>> 0)) | 0)) | 0)
                                                ? 9007199254740992
                                                : 9007199254740994),
                                        (S = ((0 | f) / 2) | 0),
                                        (r =
                                            c >>> 0 < S >>> 0
                                                ? 0.5
                                                : E & ((0 | c) == (0 | S))
                                                ? 1
                                                : 1.5),
                                        C &&
                                            ((S = 45 == (0 | Xr[O >> 0])),
                                            (r = S ? -r : r),
                                            (l = S ? -l : l)),
                                        (E = (T - c) | 0),
                                        (Kr[s >> 2] = E),
                                        l + r != l)
                                    ) {
                                        if (
                                            ((S = (E + f) | 0),
                                            (Kr[s >> 2] = S),
                                            S >>> 0 > 999999999)
                                        )
                                            for (u = s; ; ) {
                                                if (
                                                    ((E = (u + -4) | 0),
                                                    (Kr[u >> 2] = 0),
                                                    E >>> 0 < o >>> 0 &&
                                                        ((o = (o + -4) | 0), (Kr[o >> 2] = 0)),
                                                    (S = (1 + (0 | Kr[E >> 2])) | 0),
                                                    (Kr[E >> 2] = S),
                                                    !(S >>> 0 > 999999999))
                                                )
                                                    break;
                                                u = E;
                                            }
                                        else E = s;
                                        if (
                                            ((u = (9 * ((N - o) >> 2)) | 0),
                                            (T = 0 | Kr[o >> 2]) >>> 0 >= 10)
                                        ) {
                                            f = 10;
                                            do {
                                                (f = (10 * f) | 0), (u = (u + 1) | 0);
                                            } while (T >>> 0 >= f >>> 0);
                                        }
                                    } else E = s;
                                    (E = (E + 4) | 0), (E = t >>> 0 > E >>> 0 ? E : t), (S = o);
                                } else (E = t), (S = o);
                                for (M = E; ; ) {
                                    if (M >>> 0 <= S >>> 0) {
                                        R = 0;
                                        break;
                                    }
                                    if (((o = (M + -4) | 0), 0 | Kr[o >> 2])) {
                                        R = 1;
                                        break;
                                    }
                                    M = o;
                                }
                                t = (0 - u) | 0;
                                do {
                                    if (A) {
                                        if (
                                            ((o = ((1 & (1 ^ d)) + a) | 0),
                                            ((0 | o) > (0 | u)) & ((0 | u) > -5)
                                                ? ((f = (_ + -1) | 0), (a = (o + -1 - u) | 0))
                                                : ((f = (_ + -2) | 0), (a = (o + -1) | 0)),
                                            !(o = 8 & i))
                                        ) {
                                            if (R ? 0 != (0 | (I = 0 | Kr[(M + -4) >> 2])) : 0)
                                                if ((I >>> 0) % 10 | 0) E = 0;
                                                else {
                                                    (E = 0), (o = 10);
                                                    do {
                                                        (o = (10 * o) | 0), (E = (E + 1) | 0);
                                                    } while (!(0 | (I >>> 0) % (o >>> 0)));
                                                }
                                            else E = 9;
                                            if (
                                                ((o = (((9 * ((M - N) >> 2)) | 0) - 9) | 0),
                                                102 == (32 | f))
                                            ) {
                                                (s = (o - E) | 0),
                                                    (s = (0 | s) > 0 ? s : 0),
                                                    (a = (0 | a) < (0 | s) ? a : s),
                                                    (s = 0);
                                                break;
                                            }
                                            (s = (o + u - E) | 0),
                                                (s = (0 | s) > 0 ? s : 0),
                                                (a = (0 | a) < (0 | s) ? a : s),
                                                (s = 0);
                                            break;
                                        }
                                        s = o;
                                    } else (f = _), (s = 8 & i);
                                } while (0);
                                if (((A = a | s), (T = (0 != (0 | A)) & 1), (c = 102 == (32 | f))))
                                    (d = 0), (o = (0 | u) > 0 ? u : 0);
                                else {
                                    if (
                                        ((o = (0 | u) < 0 ? t : u),
                                        (o = 0 | Ee(o, (((0 | o) < 0) << 31) >> 31, P)),
                                        (((E = P) - o) | 0) < 2)
                                    )
                                        do {
                                            (o = (o + -1) | 0), (Xr[o >> 0] = 48);
                                        } while (((E - o) | 0) < 2);
                                    (Xr[(o + -1) >> 0] = 43 + ((u >> 31) & 2)),
                                        (o = (o + -2) | 0),
                                        (Xr[o >> 0] = f),
                                        (d = o),
                                        (o = (E - o) | 0);
                                }
                                if (
                                    ((o = (C + 1 + a + T + o) | 0),
                                    se(e, 32, n, o, i),
                                    tr(e, O, C),
                                    se(e, 48, n, o, 65536 ^ i),
                                    c)
                                ) {
                                    (f = S >>> 0 > h >>> 0 ? h : S),
                                        (s = (b + 9) | 0),
                                        (T = s),
                                        (c = (b + 8) | 0),
                                        (E = f);
                                    do {
                                        if (
                                            ((u = 0 | Ee(0 | Kr[E >> 2], 0, s)), (0 | E) == (0 | f))
                                        )
                                            (0 | u) == (0 | s) && ((Xr[c >> 0] = 48), (u = c));
                                        else if (u >>> 0 > b >>> 0) {
                                            ee(0 | b, 48, (u - L) | 0);
                                            do {
                                                u = (u + -1) | 0;
                                            } while (u >>> 0 > b >>> 0);
                                        }
                                        tr(e, u, (T - u) | 0), (E = (E + 4) | 0);
                                    } while (E >>> 0 <= h >>> 0);
                                    if (
                                        (0 | A && tr(e, 2138, 1),
                                        (E >>> 0 < M >>> 0) & ((0 | a) > 0))
                                    )
                                        for (;;) {
                                            if (
                                                (u = 0 | Ee(0 | Kr[E >> 2], 0, s)) >>> 0 >
                                                b >>> 0
                                            ) {
                                                ee(0 | b, 48, (u - L) | 0);
                                                do {
                                                    u = (u + -1) | 0;
                                                } while (u >>> 0 > b >>> 0);
                                            }
                                            if (
                                                (tr(e, u, (0 | a) < 9 ? a : 9),
                                                (E = (E + 4) | 0),
                                                (u = (a + -9) | 0),
                                                !((E >>> 0 < M >>> 0) & ((0 | a) > 9)))
                                            ) {
                                                a = u;
                                                break;
                                            }
                                            a = u;
                                        }
                                    se(e, 48, (a + 9) | 0, 9, 0);
                                } else {
                                    if (((A = R ? M : (S + 4) | 0), (0 | a) > -1)) {
                                        (R = (b + 9) | 0),
                                            (s = 0 == (0 | s)),
                                            (t = R),
                                            (T = (0 - L) | 0),
                                            (c = (b + 8) | 0),
                                            (f = S);
                                        do {
                                            (u = 0 | Ee(0 | Kr[f >> 2], 0, R)),
                                                (0 | u) == (0 | R) && ((Xr[c >> 0] = 48), (u = c));
                                            do {
                                                if ((0 | f) == (0 | S)) {
                                                    if (
                                                        ((E = (u + 1) | 0),
                                                        tr(e, u, 1),
                                                        s & ((0 | a) < 1))
                                                    ) {
                                                        u = E;
                                                        break;
                                                    }
                                                    tr(e, 2138, 1), (u = E);
                                                } else {
                                                    if (u >>> 0 <= b >>> 0) break;
                                                    ee(0 | b, 48, (u + T) | 0);
                                                    do {
                                                        u = (u + -1) | 0;
                                                    } while (u >>> 0 > b >>> 0);
                                                }
                                            } while (0);
                                            (L = (t - u) | 0),
                                                tr(e, u, (0 | a) > (0 | L) ? L : a),
                                                (a = (a - L) | 0),
                                                (f = (f + 4) | 0);
                                        } while ((f >>> 0 < A >>> 0) & ((0 | a) > -1));
                                    }
                                    se(e, 48, (a + 18) | 0, 18, 0), tr(e, d, (P - d) | 0);
                                }
                                se(e, 32, n, o, 8192 ^ i);
                            } else
                                (b = 0 != ((32 & _) | 0)),
                                    (o = (C + 3) | 0),
                                    se(e, 32, n, o, -65537 & i),
                                    tr(e, O, C),
                                    tr(e, (r != r) | !1 ? (b ? 2114 : 2118) : b ? 2106 : 2110, 3),
                                    se(e, 32, n, o, 8192 ^ i);
                        } while (0);
                        return (on = F), 0 | ((0 | o) < (0 | n) ? n : o);
                    }
                    function o(e, r, n, t, i) {
                        (e |= 0), (r |= 0), (n |= 0), (t |= 0), (i |= 0);
                        var o = 0,
                            a = 0,
                            u = 0,
                            E = 0,
                            f = 0,
                            T = 0,
                            c = 0,
                            l = 0,
                            s = 0,
                            A = 0,
                            R = 0,
                            d = 0,
                            M = 0,
                            S = 0,
                            N = 0,
                            I = 0,
                            O = 0,
                            h = 0,
                            P = 0,
                            L = 0,
                            b = 0,
                            F = 0,
                            U = 0;
                        (U = on),
                            (on = (on + 64) | 0),
                            (P = (U + 16) | 0),
                            (L = U),
                            (O = (U + 24) | 0),
                            (b = (U + 8) | 0),
                            (F = (U + 20) | 0),
                            (Kr[P >> 2] = r),
                            (S = 0 != (0 | e)),
                            (N = (O + 40) | 0),
                            (I = N),
                            (O = (O + 39) | 0),
                            (h = (b + 4) | 0),
                            (a = 0),
                            (o = 0),
                            (T = 0);
                        e: for (;;) {
                            do {
                                if ((0 | o) > -1) {
                                    if ((0 | a) > ((2147483647 - o) | 0)) {
                                        (o = 0 | Pr()), (Kr[o >> 2] = 75), (o = -1);
                                        break;
                                    }
                                    o = (a + o) | 0;
                                    break;
                                }
                            } while (0);
                            if (!(((a = 0 | Xr[r >> 0]) << 24) >> 24)) {
                                M = 87;
                                break;
                            }
                            u = r;
                            r: for (;;) {
                                switch ((a << 24) >> 24) {
                                    case 37:
                                        (a = u), (M = 9);
                                        break r;
                                    case 0:
                                        a = u;
                                        break r;
                                }
                                (d = (u + 1) | 0), (Kr[P >> 2] = d), (a = 0 | Xr[d >> 0]), (u = d);
                            }
                            r: do {
                                if (9 == (0 | M))
                                    for (;;) {
                                        if (((M = 0), 37 != (0 | Xr[(u + 1) >> 0]))) break r;
                                        if (
                                            ((a = (a + 1) | 0),
                                            (u = (u + 2) | 0),
                                            (Kr[P >> 2] = u),
                                            37 != (0 | Xr[u >> 0]))
                                        )
                                            break;
                                        M = 9;
                                    }
                            } while (0);
                            if (((a = (a - r) | 0), S && tr(e, r, a), 0 | a)) r = u;
                            else {
                                (E = (u + 1) | 0),
                                    (a = ((0 | Xr[E >> 0]) - 48) | 0),
                                    a >>> 0 < 10
                                        ? ((d = 36 == (0 | Xr[(u + 2) >> 0])),
                                          (R = d ? a : -1),
                                          (T = d ? 1 : T),
                                          (E = d ? (u + 3) | 0 : E))
                                        : (R = -1),
                                    (Kr[P >> 2] = E),
                                    (a = 0 | Xr[E >> 0]),
                                    (u = (((a << 24) >> 24) - 32) | 0);
                                r: do {
                                    if (u >>> 0 < 32)
                                        for (f = 0, c = a; ; ) {
                                            if (!(75913 & (a = 1 << u))) {
                                                a = c;
                                                break r;
                                            }
                                            if (
                                                ((f |= a),
                                                (E = (E + 1) | 0),
                                                (Kr[P >> 2] = E),
                                                (a = 0 | Xr[E >> 0]),
                                                (u = (((a << 24) >> 24) - 32) | 0) >>> 0 >= 32)
                                            )
                                                break;
                                            c = a;
                                        }
                                    else f = 0;
                                } while (0);
                                if ((a << 24) >> 24 == 42) {
                                    if (
                                        ((u = (E + 1) | 0),
                                        (a = ((0 | Xr[u >> 0]) - 48) | 0),
                                        a >>> 0 < 10 ? 36 == (0 | Xr[(E + 2) >> 0]) : 0)
                                    )
                                        (Kr[(i + (a << 2)) >> 2] = 10),
                                            (a = 0 | Kr[(t + (((0 | Xr[u >> 0]) - 48) << 3)) >> 2]),
                                            (T = 1),
                                            (E = (E + 3) | 0);
                                    else {
                                        if (0 | T) {
                                            o = -1;
                                            break;
                                        }
                                        S
                                            ? ((T = (3 + (0 | Kr[n >> 2])) & -4),
                                              (a = 0 | Kr[T >> 2]),
                                              (Kr[n >> 2] = T + 4),
                                              (T = 0),
                                              (E = u))
                                            : ((a = 0), (T = 0), (E = u));
                                    }
                                    (Kr[P >> 2] = E),
                                        (d = (0 | a) < 0),
                                        (a = d ? (0 - a) | 0 : a),
                                        (f = d ? 8192 | f : f);
                                } else {
                                    if ((0 | (a = 0 | he(P))) < 0) {
                                        o = -1;
                                        break;
                                    }
                                    E = 0 | Kr[P >> 2];
                                }
                                do {
                                    if (46 == (0 | Xr[E >> 0])) {
                                        if (42 != (0 | Xr[(E + 1) >> 0])) {
                                            (Kr[P >> 2] = E + 1),
                                                (u = 0 | he(P)),
                                                (E = 0 | Kr[P >> 2]);
                                            break;
                                        }
                                        if (
                                            ((c = (E + 2) | 0),
                                            (u = ((0 | Xr[c >> 0]) - 48) | 0),
                                            u >>> 0 < 10 ? 36 == (0 | Xr[(E + 3) >> 0]) : 0)
                                        ) {
                                            (Kr[(i + (u << 2)) >> 2] = 10),
                                                (u =
                                                    0 |
                                                    Kr[(t + (((0 | Xr[c >> 0]) - 48) << 3)) >> 2]),
                                                (E = (E + 4) | 0),
                                                (Kr[P >> 2] = E);
                                            break;
                                        }
                                        if (0 | T) {
                                            o = -1;
                                            break e;
                                        }
                                        S
                                            ? ((d = (3 + (0 | Kr[n >> 2])) & -4),
                                              (u = 0 | Kr[d >> 2]),
                                              (Kr[n >> 2] = d + 4))
                                            : (u = 0),
                                            (Kr[P >> 2] = c),
                                            (E = c);
                                    } else u = -1;
                                } while (0);
                                for (A = 0; ; ) {
                                    if ((((0 | Xr[E >> 0]) - 65) | 0) >>> 0 > 57) {
                                        o = -1;
                                        break e;
                                    }
                                    if (
                                        ((d = (E + 1) | 0),
                                        (Kr[P >> 2] = d),
                                        (c =
                                            0 |
                                            Xr[
                                                ((0 | Xr[E >> 0]) - 65 + (1606 + ((58 * A) | 0))) >>
                                                    0
                                            ]),
                                        !((((l = 255 & c) + -1) | 0) >>> 0 < 8))
                                    )
                                        break;
                                    (A = l), (E = d);
                                }
                                if (!((c << 24) >> 24)) {
                                    o = -1;
                                    break;
                                }
                                s = (0 | R) > -1;
                                do {
                                    if ((c << 24) >> 24 == 19) {
                                        if (s) {
                                            o = -1;
                                            break e;
                                        }
                                        M = 49;
                                    } else {
                                        if (s) {
                                            (Kr[(i + (R << 2)) >> 2] = l),
                                                (s = (t + (R << 3)) | 0),
                                                (R = 0 | Kr[(s + 4) >> 2]),
                                                (M = L),
                                                (Kr[M >> 2] = Kr[s >> 2]),
                                                (Kr[(M + 4) >> 2] = R),
                                                (M = 49);
                                            break;
                                        }
                                        if (!S) {
                                            o = 0;
                                            break e;
                                        }
                                        C(L, l, n);
                                    }
                                } while (0);
                                if (49 != (0 | M) || ((M = 0), S)) {
                                    (E = 0 | Xr[E >> 0]),
                                        (E = (0 != (0 | A)) & (3 == ((15 & E) | 0)) ? -33 & E : E),
                                        (s = -65537 & f),
                                        (R = 0 == ((8192 & f) | 0) ? f : s);
                                    r: do {
                                        switch (0 | E) {
                                            case 110:
                                                switch (((255 & A) << 24) >> 24) {
                                                    case 0:
                                                    case 1:
                                                        (Kr[Kr[L >> 2] >> 2] = o), (a = 0), (r = d);
                                                        continue e;
                                                    case 2:
                                                        (a = 0 | Kr[L >> 2]),
                                                            (Kr[a >> 2] = o),
                                                            (Kr[(a + 4) >> 2] =
                                                                (((0 | o) < 0) << 31) >> 31),
                                                            (a = 0),
                                                            (r = d);
                                                        continue e;
                                                    case 3:
                                                        (Yr[Kr[L >> 2] >> 1] = o), (a = 0), (r = d);
                                                        continue e;
                                                    case 4:
                                                        (Xr[Kr[L >> 2] >> 0] = o), (a = 0), (r = d);
                                                        continue e;
                                                    case 6:
                                                        (Kr[Kr[L >> 2] >> 2] = o), (a = 0), (r = d);
                                                        continue e;
                                                    case 7:
                                                        (a = 0 | Kr[L >> 2]),
                                                            (Kr[a >> 2] = o),
                                                            (Kr[(a + 4) >> 2] =
                                                                (((0 | o) < 0) << 31) >> 31),
                                                            (a = 0),
                                                            (r = d);
                                                        continue e;
                                                    default:
                                                        (a = 0), (r = d);
                                                        continue e;
                                                }
                                            case 112:
                                                (E = 120),
                                                    (u = u >>> 0 > 8 ? u : 8),
                                                    (r = 8 | R),
                                                    (M = 61);
                                                break;
                                            case 88:
                                            case 120:
                                                (r = R), (M = 61);
                                                break;
                                            case 111:
                                                (E = L),
                                                    (r = 0 | Kr[E >> 2]),
                                                    (E = 0 | Kr[(E + 4) >> 2]),
                                                    (l = 0 | Ue(r, E, N)),
                                                    (s = (I - l) | 0),
                                                    (f = 0),
                                                    (c = 2070),
                                                    (u =
                                                        (0 == ((8 & R) | 0)) | ((0 | u) > (0 | s))
                                                            ? u
                                                            : (s + 1) | 0),
                                                    (s = R),
                                                    (M = 67);
                                                break;
                                            case 105:
                                            case 100:
                                                if (
                                                    ((E = L),
                                                    (r = 0 | Kr[E >> 2]),
                                                    (0 | (E = 0 | Kr[(E + 4) >> 2])) < 0)
                                                ) {
                                                    (r = 0 | Ze(0, 0, 0 | r, 0 | E)),
                                                        (E = Tn),
                                                        (f = L),
                                                        (Kr[f >> 2] = r),
                                                        (Kr[(f + 4) >> 2] = E),
                                                        (f = 1),
                                                        (c = 2070),
                                                        (M = 66);
                                                    break r;
                                                }
                                                (f = (0 != ((2049 & R) | 0)) & 1),
                                                    (c =
                                                        0 == ((2048 & R) | 0)
                                                            ? 0 == ((1 & R) | 0)
                                                                ? 2070
                                                                : 2072
                                                            : 2071),
                                                    (M = 66);
                                                break r;
                                            case 117:
                                                (E = L),
                                                    (f = 0),
                                                    (c = 2070),
                                                    (r = 0 | Kr[E >> 2]),
                                                    (E = 0 | Kr[(E + 4) >> 2]),
                                                    (M = 66);
                                                break;
                                            case 99:
                                                (Xr[O >> 0] = Kr[L >> 2]),
                                                    (r = O),
                                                    (f = 0),
                                                    (c = 2070),
                                                    (l = N),
                                                    (E = 1),
                                                    (u = s);
                                                break;
                                            case 109:
                                                (E = 0 | Pr()),
                                                    (E = 0 | or(0 | Kr[E >> 2])),
                                                    (M = 71);
                                                break;
                                            case 115:
                                                (E = 0 | Kr[L >> 2]),
                                                    (E = 0 | E ? E : 2080),
                                                    (M = 71);
                                                break;
                                            case 67:
                                                (Kr[b >> 2] = Kr[L >> 2]),
                                                    (Kr[h >> 2] = 0),
                                                    (Kr[L >> 2] = b),
                                                    (l = -1),
                                                    (E = b),
                                                    (M = 75);
                                                break;
                                            case 83:
                                                (r = 0 | Kr[L >> 2]),
                                                    u
                                                        ? ((l = u), (E = r), (M = 75))
                                                        : (se(e, 32, a, 0, R), (r = 0), (M = 84));
                                                break;
                                            case 65:
                                            case 71:
                                            case 70:
                                            case 69:
                                            case 97:
                                            case 103:
                                            case 102:
                                            case 101:
                                                (a = 0 | _(e, +rn[L >> 3], a, u, R, E)), (r = d);
                                                continue e;
                                            default:
                                                (f = 0), (c = 2070), (l = N), (E = u), (u = R);
                                        }
                                    } while (0);
                                    r: do {
                                        if (61 == (0 | M))
                                            (R = L),
                                                (A = 0 | Kr[R >> 2]),
                                                (R = 0 | Kr[(R + 4) >> 2]),
                                                (l = 0 | Pe(A, R, N, 32 & E)),
                                                (c =
                                                    (0 == ((8 & r) | 0)) |
                                                    ((0 == (0 | A)) & (0 == (0 | R)))),
                                                (f = c ? 0 : 2),
                                                (c = c ? 2070 : (2070 + (E >> 4)) | 0),
                                                (s = r),
                                                (r = A),
                                                (E = R),
                                                (M = 67);
                                        else if (66 == (0 | M))
                                            (l = 0 | Ee(r, E, N)), (s = R), (M = 67);
                                        else if (71 == (0 | M))
                                            (M = 0),
                                                (R = 0 | X(E, 0, u)),
                                                (A = 0 == (0 | R)),
                                                (r = E),
                                                (f = 0),
                                                (c = 2070),
                                                (l = A ? (E + u) | 0 : R),
                                                (E = A ? u : (R - E) | 0),
                                                (u = s);
                                        else if (75 == (0 | M)) {
                                            for (M = 0, c = E, r = 0, u = 0; ; ) {
                                                if (!(f = 0 | Kr[c >> 2])) break;
                                                if (
                                                    ((0 | (u = 0 | ar(F, f))) < 0) |
                                                    (u >>> 0 > ((l - r) | 0) >>> 0)
                                                )
                                                    break;
                                                if (((r = (u + r) | 0), !(l >>> 0 > r >>> 0)))
                                                    break;
                                                c = (c + 4) | 0;
                                            }
                                            if ((0 | u) < 0) {
                                                o = -1;
                                                break e;
                                            }
                                            if ((se(e, 32, a, r, R), r))
                                                for (f = 0; ; ) {
                                                    if (!(u = 0 | Kr[E >> 2])) {
                                                        M = 84;
                                                        break r;
                                                    }
                                                    if (
                                                        ((u = 0 | ar(F, u)),
                                                        (0 | (f = (u + f) | 0)) > (0 | r))
                                                    ) {
                                                        M = 84;
                                                        break r;
                                                    }
                                                    if ((tr(e, F, u), f >>> 0 >= r >>> 0)) {
                                                        M = 84;
                                                        break;
                                                    }
                                                    E = (E + 4) | 0;
                                                }
                                            else (r = 0), (M = 84);
                                        }
                                    } while (0);
                                    if (67 == (0 | M))
                                        (M = 0),
                                            (E = (0 != (0 | r)) | (0 != (0 | E))),
                                            (R = (0 != (0 | u)) | E),
                                            (E = (I - l + (1 & (1 ^ E))) | 0),
                                            (r = R ? l : N),
                                            (l = N),
                                            (E = R ? ((0 | u) > (0 | E) ? u : E) : u),
                                            (u = (0 | u) > -1 ? -65537 & s : s);
                                    else if (84 == (0 | M)) {
                                        (M = 0),
                                            se(e, 32, a, r, 8192 ^ R),
                                            (a = (0 | a) > (0 | r) ? a : r),
                                            (r = d);
                                        continue;
                                    }
                                    (A = (l - r) | 0),
                                        (s = (0 | E) < (0 | A) ? A : E),
                                        (R = (s + f) | 0),
                                        (a = (0 | a) < (0 | R) ? R : a),
                                        se(e, 32, a, R, u),
                                        tr(e, c, f),
                                        se(e, 48, a, R, 65536 ^ u),
                                        se(e, 48, s, A, 0),
                                        tr(e, r, A),
                                        se(e, 32, a, R, 8192 ^ u),
                                        (r = d);
                                } else (a = 0), (r = d);
                            }
                        }
                        e: do {
                            if (87 == (0 | M) && !e)
                                if (T) {
                                    for (o = 1; ; ) {
                                        if (!(r = 0 | Kr[(i + (o << 2)) >> 2])) break;
                                        if (
                                            (C((t + (o << 3)) | 0, r, n),
                                            (0 | (o = (o + 1) | 0)) >= 10)
                                        ) {
                                            o = 1;
                                            break e;
                                        }
                                    }
                                    for (;;) {
                                        if (0 | Kr[(i + (o << 2)) >> 2]) {
                                            o = -1;
                                            break e;
                                        }
                                        if ((0 | (o = (o + 1) | 0)) >= 10) {
                                            o = 1;
                                            break;
                                        }
                                    }
                                } else o = 0;
                        } while (0);
                        return (on = U), 0 | o;
                    }
                    function a(e, r) {
                        (e |= 0), (r |= 0);
                        var n = 0,
                            t = 0,
                            i = 0,
                            _ = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            E = 0,
                            f = 0,
                            T = 0,
                            c = 0,
                            l = 0,
                            s = 0,
                            A = 0,
                            R = 0,
                            d = 0,
                            M = 0,
                            S = 0,
                            N = 0,
                            O = 0,
                            C = 0,
                            h = 0,
                            L = 0,
                            b = 0,
                            F = 0;
                        if (
                            ((F = on),
                            (on = (on + 704) | 0),
                            (C = (F + 144) | 0),
                            (O = (F + 128) | 0),
                            (N = (F + 112) | 0),
                            (S = (F + 96) | 0),
                            (M = (F + 80) | 0),
                            (d = (F + 64) | 0),
                            (R = (F + 48) | 0),
                            (h = (F + 32) | 0),
                            (f = (F + 16) | 0),
                            (a = F),
                            (c = (F + 184) | 0),
                            (b = (F + 160) | 0),
                            !(l = 0 | x(e, 14)))
                        )
                            return J(r), (b = 1), (on = F), 0 | b;
                        if (
                            ((s = (r + 4) | 0),
                            (A = (r + 8) | 0),
                            (0 | (n = 0 | Kr[A >> 2])) != (0 | l))
                        ) {
                            if (n >>> 0 <= l >>> 0) {
                                do {
                                    if ((0 | Kr[(r + 12) >> 2]) >>> 0 < l >>> 0) {
                                        if (0 | P(s, l, ((n + 1) | 0) == (0 | l), 1, 0)) {
                                            n = 0 | Kr[A >> 2];
                                            break;
                                        }
                                        return (Xr[(r + 16) >> 0] = 1), (b = 0), (on = F), 0 | b;
                                    }
                                } while (0);
                                ee(((0 | Kr[s >> 2]) + n) | 0, 0, (l - n) | 0);
                            }
                            Kr[A >> 2] = l;
                        }
                        if (
                            (ee(0 | Kr[s >> 2], 0, 0 | l),
                            (T = (e + 20) | 0),
                            (0 | (n = 0 | Kr[T >> 2])) < 5)
                        ) {
                            (_ = (e + 4) | 0), (o = (e + 8) | 0), (i = (e + 16) | 0);
                            do {
                                (t = 0 | Kr[_ >> 2]),
                                    (0 | t) == (0 | Kr[o >> 2])
                                        ? (t = 0)
                                        : ((Kr[_ >> 2] = t + 1), (t = 0 | Zr[t >> 0])),
                                    (n = (n + 8) | 0),
                                    (Kr[T >> 2] = n),
                                    (0 | n) >= 33 &&
                                        ((Kr[a >> 2] = 866),
                                        (Kr[(a + 4) >> 2] = 3208),
                                        (Kr[(a + 8) >> 2] = 1366),
                                        He(c, 812, a),
                                        ce(c),
                                        (n = 0 | Kr[T >> 2])),
                                    (t = (t << (32 - n)) | Kr[i >> 2]),
                                    (Kr[i >> 2] = t);
                            } while ((0 | n) < 5);
                        } else (t = (e + 16) | 0), (i = t), (t = 0 | Kr[t >> 2]);
                        if (
                            ((E = t >>> 27),
                            (Kr[i >> 2] = t << 5),
                            (Kr[T >> 2] = n + -5),
                            ((E + -1) | 0) >>> 0 > 20)
                        )
                            return (b = 0), (on = F), 0 | b;
                        (Kr[(b + 20) >> 2] = 0),
                            (Kr[b >> 2] = 0),
                            (Kr[(b + 4) >> 2] = 0),
                            (Kr[(b + 8) >> 2] = 0),
                            (Kr[(b + 12) >> 2] = 0),
                            (Xr[(b + 16) >> 0] = 0),
                            (n = (b + 4) | 0),
                            (t = (b + 8) | 0);
                        e: do {
                            if (0 | P(n, 21, 0, 1, 0)) {
                                (_ = 0 | Kr[t >> 2]),
                                    (u = 0 | Kr[n >> 2]),
                                    ee((u + _) | 0, 0, (21 - _) | 0),
                                    (Kr[t >> 2] = 21),
                                    (_ = (e + 4) | 0),
                                    (o = (e + 8) | 0),
                                    (a = (e + 16) | 0),
                                    (i = 0);
                                do {
                                    if ((0 | (n = 0 | Kr[T >> 2])) < 3)
                                        do {
                                            (t = 0 | Kr[_ >> 2]),
                                                (0 | t) == (0 | Kr[o >> 2])
                                                    ? (t = 0)
                                                    : ((Kr[_ >> 2] = t + 1), (t = 0 | Zr[t >> 0])),
                                                (n = (n + 8) | 0),
                                                (Kr[T >> 2] = n),
                                                (0 | n) >= 33 &&
                                                    ((Kr[f >> 2] = 866),
                                                    (Kr[(f + 4) >> 2] = 3208),
                                                    (Kr[(f + 8) >> 2] = 1366),
                                                    He(c, 812, f),
                                                    ce(c),
                                                    (n = 0 | Kr[T >> 2])),
                                                (t = (t << (32 - n)) | Kr[a >> 2]),
                                                (Kr[a >> 2] = t);
                                        } while ((0 | n) < 3);
                                    else t = 0 | Kr[a >> 2];
                                    (Kr[a >> 2] = t << 3),
                                        (Kr[T >> 2] = n + -3),
                                        (Xr[(u + (0 | Zr[(1327 + i) >> 0])) >> 0] = t >>> 29),
                                        (i = (i + 1) | 0);
                                } while ((0 | i) != (0 | E));
                                if (0 | y(b)) {
                                    (a = (e + 4) | 0),
                                        (u = (e + 8) | 0),
                                        (E = (e + 16) | 0),
                                        (n = 0);
                                    r: do {
                                        (o = (l - n) | 0), (i = 0 | I(e, b));
                                        n: do {
                                            if (i >>> 0 < 17)
                                                (0 | Kr[A >> 2]) >>> 0 <= n >>> 0 &&
                                                    ((Kr[h >> 2] = 866),
                                                    (Kr[(h + 4) >> 2] = 910),
                                                    (Kr[(h + 8) >> 2] = 1497),
                                                    He(c, 812, h),
                                                    ce(c)),
                                                    (Xr[((0 | Kr[s >> 2]) + n) >> 0] = i),
                                                    (n = (n + 1) | 0);
                                            else
                                                switch (0 | i) {
                                                    case 17:
                                                        if ((0 | (t = 0 | Kr[T >> 2])) < 3)
                                                            do {
                                                                (i = 0 | Kr[a >> 2]),
                                                                    (0 | i) == (0 | Kr[u >> 2])
                                                                        ? (i = 0)
                                                                        : ((Kr[a >> 2] = i + 1),
                                                                          (i = 0 | Zr[i >> 0])),
                                                                    (t = (t + 8) | 0),
                                                                    (Kr[T >> 2] = t),
                                                                    (0 | t) >= 33 &&
                                                                        ((Kr[R >> 2] = 866),
                                                                        (Kr[(R + 4) >> 2] = 3208),
                                                                        (Kr[(R + 8) >> 2] = 1366),
                                                                        He(c, 812, R),
                                                                        ce(c),
                                                                        (t = 0 | Kr[T >> 2])),
                                                                    (i =
                                                                        (i << (32 - t)) |
                                                                        Kr[E >> 2]),
                                                                    (Kr[E >> 2] = i);
                                                            } while ((0 | t) < 3);
                                                        else i = 0 | Kr[E >> 2];
                                                        if (
                                                            ((Kr[E >> 2] = i << 3),
                                                            (Kr[T >> 2] = t + -3),
                                                            (i = (3 + (i >>> 29)) | 0),
                                                            (t = i >>> 0 > o >>> 0))
                                                        ) {
                                                            n = 0;
                                                            break e;
                                                        }
                                                        n = ((t ? 0 : i) + n) | 0;
                                                        break n;
                                                    case 18:
                                                        if ((0 | (t = 0 | Kr[T >> 2])) < 7)
                                                            do {
                                                                (i = 0 | Kr[a >> 2]),
                                                                    (0 | i) == (0 | Kr[u >> 2])
                                                                        ? (i = 0)
                                                                        : ((Kr[a >> 2] = i + 1),
                                                                          (i = 0 | Zr[i >> 0])),
                                                                    (t = (t + 8) | 0),
                                                                    (Kr[T >> 2] = t),
                                                                    (0 | t) >= 33 &&
                                                                        ((Kr[d >> 2] = 866),
                                                                        (Kr[(d + 4) >> 2] = 3208),
                                                                        (Kr[(d + 8) >> 2] = 1366),
                                                                        He(c, 812, d),
                                                                        ce(c),
                                                                        (t = 0 | Kr[T >> 2])),
                                                                    (i =
                                                                        (i << (32 - t)) |
                                                                        Kr[E >> 2]),
                                                                    (Kr[E >> 2] = i);
                                                            } while ((0 | t) < 7);
                                                        else i = 0 | Kr[E >> 2];
                                                        if (
                                                            ((Kr[E >> 2] = i << 7),
                                                            (Kr[T >> 2] = t + -7),
                                                            (i = (11 + (i >>> 25)) | 0),
                                                            (t = i >>> 0 > o >>> 0))
                                                        ) {
                                                            n = 0;
                                                            break e;
                                                        }
                                                        n = ((t ? 0 : i) + n) | 0;
                                                        break n;
                                                    default:
                                                        if (((i + -19) | 0) >>> 0 >= 2) {
                                                            L = 81;
                                                            break r;
                                                        }
                                                        if (((t = 0 | Kr[T >> 2]), 19 == (0 | i))) {
                                                            if ((0 | t) < 2)
                                                                for (i = t; ; ) {
                                                                    if (
                                                                        ((t = 0 | Kr[a >> 2]),
                                                                        (0 | t) == (0 | Kr[u >> 2])
                                                                            ? (_ = 0)
                                                                            : ((Kr[a >> 2] = t + 1),
                                                                              (_ = 0 | Zr[t >> 0])),
                                                                        (t = (i + 8) | 0),
                                                                        (Kr[T >> 2] = t),
                                                                        (0 | t) >= 33 &&
                                                                            ((Kr[M >> 2] = 866),
                                                                            (Kr[
                                                                                (M + 4) >> 2
                                                                            ] = 3208),
                                                                            (Kr[
                                                                                (M + 8) >> 2
                                                                            ] = 1366),
                                                                            He(c, 812, M),
                                                                            ce(c),
                                                                            (t = 0 | Kr[T >> 2])),
                                                                        (i =
                                                                            (_ << (32 - t)) |
                                                                            Kr[E >> 2]),
                                                                        (Kr[E >> 2] = i),
                                                                        !((0 | t) < 2))
                                                                    )
                                                                        break;
                                                                    i = t;
                                                                }
                                                            else i = 0 | Kr[E >> 2];
                                                            (Kr[E >> 2] = i << 2),
                                                                (i >>>= 30),
                                                                (_ = 3),
                                                                (t = (t + -2) | 0);
                                                        } else {
                                                            if ((0 | t) < 6)
                                                                do {
                                                                    (i = 0 | Kr[a >> 2]),
                                                                        (0 | i) == (0 | Kr[u >> 2])
                                                                            ? (i = 0)
                                                                            : ((Kr[a >> 2] = i + 1),
                                                                              (i = 0 | Zr[i >> 0])),
                                                                        (t = (t + 8) | 0),
                                                                        (Kr[T >> 2] = t),
                                                                        (0 | t) >= 33 &&
                                                                            ((Kr[S >> 2] = 866),
                                                                            (Kr[
                                                                                (S + 4) >> 2
                                                                            ] = 3208),
                                                                            (Kr[
                                                                                (S + 8) >> 2
                                                                            ] = 1366),
                                                                            He(c, 812, S),
                                                                            ce(c),
                                                                            (t = 0 | Kr[T >> 2])),
                                                                        (i =
                                                                            (i << (32 - t)) |
                                                                            Kr[E >> 2]),
                                                                        (Kr[E >> 2] = i);
                                                                } while ((0 | t) < 6);
                                                            else i = 0 | Kr[E >> 2];
                                                            (Kr[E >> 2] = i << 6),
                                                                (i >>>= 26),
                                                                (_ = 7),
                                                                (t = (t + -6) | 0);
                                                        }
                                                        if (
                                                            ((Kr[T >> 2] = t),
                                                            (i = (i + _) | 0),
                                                            (0 == (0 | n)) | (i >>> 0 > o >>> 0))
                                                        ) {
                                                            n = 0;
                                                            break e;
                                                        }
                                                        if (
                                                            ((t = (n + -1) | 0),
                                                            (0 | Kr[A >> 2]) >>> 0 <= t >>> 0 &&
                                                                ((Kr[N >> 2] = 866),
                                                                (Kr[(N + 4) >> 2] = 910),
                                                                (Kr[(N + 8) >> 2] = 1497),
                                                                He(c, 812, N),
                                                                ce(c)),
                                                            !(
                                                                ((_ =
                                                                    0 |
                                                                    Xr[
                                                                        ((0 | Kr[s >> 2]) + t) >> 0
                                                                    ]) <<
                                                                    24) >>
                                                                24
                                                            ))
                                                        ) {
                                                            n = 0;
                                                            break e;
                                                        }
                                                        if (((t = (i + n) | 0), n >>> 0 >= t >>> 0))
                                                            break n;
                                                        do {
                                                            (0 | Kr[A >> 2]) >>> 0 <= n >>> 0 &&
                                                                ((Kr[O >> 2] = 866),
                                                                (Kr[(O + 4) >> 2] = 910),
                                                                (Kr[(O + 8) >> 2] = 1497),
                                                                He(c, 812, O),
                                                                ce(c)),
                                                                (Xr[
                                                                    ((0 | Kr[s >> 2]) + n) >> 0
                                                                ] = _),
                                                                (n = (n + 1) | 0);
                                                        } while ((0 | n) != (0 | t));
                                                        n = t;
                                                }
                                        } while (0);
                                    } while (l >>> 0 > n >>> 0);
                                    if (81 == (0 | L)) {
                                        (Kr[C >> 2] = 866),
                                            (Kr[(C + 4) >> 2] = 3149),
                                            (Kr[(C + 8) >> 2] = 1348),
                                            He(c, 812, C),
                                            ce(c),
                                            (n = 0);
                                        break;
                                    }
                                    n = (0 | l) == (0 | n) ? 0 | y(r) : 0;
                                } else n = 0;
                            } else (Xr[(b + 16) >> 0] = 1), (n = 0);
                        } while (0);
                        return z(b), (b = n), (on = F), 0 | b;
                    }
                    function u(e, r, n, t) {
                        (e |= 0), (r |= 0), (n |= 0), (t |= 0);
                        var i = 0,
                            _ = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            E = 0,
                            f = 0,
                            T = 0,
                            c = 0,
                            l = 0,
                            s = 0,
                            A = 0,
                            R = 0,
                            d = 0,
                            M = 0,
                            S = 0,
                            N = 0,
                            I = 0,
                            O = 0,
                            C = 0,
                            h = 0,
                            P = 0,
                            L = 0,
                            b = 0,
                            F = 0,
                            U = 0,
                            m = 0,
                            D = 0;
                        if (
                            ((D = on),
                            (on = (on + 880) | 0),
                            (U = (D + 144) | 0),
                            (F = (D + 128) | 0),
                            (b = (D + 112) | 0),
                            (L = (D + 96) | 0),
                            (O = (D + 80) | 0),
                            (d = (D + 64) | 0),
                            (A = (D + 48) | 0),
                            (R = (D + 32) | 0),
                            (T = (D + 16) | 0),
                            (f = D),
                            (h = (D + 360) | 0),
                            (P = (D + 296) | 0),
                            (m = (D + 224) | 0),
                            (s = (D + 156) | 0),
                            (0 == (0 | r)) | (t >>> 0 > 11))
                        )
                            return (m = 0), (on = D), 0 | m;
                        (Kr[e >> 2] = r), (i = m), (_ = (i + 68) | 0);
                        do {
                            (Kr[i >> 2] = 0), (i = (i + 4) | 0);
                        } while ((0 | i) < (0 | _));
                        i = 0;
                        do {
                            (C = 0 | Xr[(n + i) >> 0]),
                                (_ = (m + ((255 & C) << 2)) | 0),
                                (C << 24) >> 24 && (Kr[_ >> 2] = 1 + (0 | Kr[_ >> 2])),
                                (i = (i + 1) | 0);
                        } while ((0 | i) != (0 | r));
                        for (_ = 0, o = 0, a = 0, u = -1, E = 1; ; ) {
                            if (
                                ((i = 0 | Kr[(m + (E << 2)) >> 2]),
                                i
                                    ? ((c = (E + -1) | 0),
                                      (Kr[(P + (c << 2)) >> 2] = _),
                                      (_ = (i + _) | 0),
                                      (C = (16 - E) | 0),
                                      (Kr[(e + 28 + (c << 2)) >> 2] =
                                          1 + (((_ + -1) << C) | ((1 << C) - 1))),
                                      (Kr[(e + 96 + (c << 2)) >> 2] = o),
                                      (Kr[(s + (E << 2)) >> 2] = o),
                                      (c = (i + o) | 0),
                                      (a = a >>> 0 > E >>> 0 ? a : E),
                                      (u = u >>> 0 < E >>> 0 ? u : E))
                                    : ((Kr[(e + 28 + ((E + -1) << 2)) >> 2] = 0), (c = o)),
                                17 == (0 | (E = (E + 1) | 0)))
                            )
                                break;
                            (_ <<= 1), (o = c);
                        }
                        (Kr[(e + 4) >> 2] = c), (_ = (e + 172) | 0);
                        do {
                            if (c >>> 0 > (0 | Kr[_ >> 2]) >>> 0) {
                                (i = (c + -1) | 0),
                                    i & c
                                        ? ((i |= i >>> 16),
                                          (i |= i >>> 8),
                                          (i |= i >>> 4),
                                          (i |= i >>> 2),
                                          (i = (1 + ((i >>> 1) | i)) | 0),
                                          (i = i >>> 0 > r >>> 0 ? r : i))
                                        : (i = c),
                                    (Kr[_ >> 2] = i),
                                    (o = (e + 176) | 0),
                                    (i = 0 | Kr[o >> 2]);
                                do {
                                    if (0 | i) {
                                        if (
                                            ((C = 0 | Kr[(i + -4) >> 2]),
                                            (i = (i + -8) | 0),
                                            (0 != (0 | C) ? (0 | C) == (0 | ~Kr[i >> 2]) : 0) ||
                                                ((Kr[f >> 2] = 866),
                                                (Kr[(f + 4) >> 2] = 651),
                                                (Kr[(f + 8) >> 2] = 1579),
                                                He(h, 812, f),
                                                ce(h)),
                                            7 & i)
                                        ) {
                                            (Kr[T >> 2] = 866),
                                                (Kr[(T + 4) >> 2] = 2506),
                                                (Kr[(T + 8) >> 2] = 1232),
                                                He(h, 812, T),
                                                ce(h);
                                            break;
                                        }
                                        _e(i, 0, 0, 1, 0);
                                        break;
                                    }
                                } while (0);
                                if (
                                    ((i = 0 | Kr[_ >> 2]),
                                    (i = 0 | i ? i : 1),
                                    (_ = 0 | j((8 + (i << 1)) | 0, 0)))
                                ) {
                                    (Kr[(_ + 4) >> 2] = i),
                                        (Kr[_ >> 2] = ~i),
                                        (Kr[o >> 2] = _ + 8),
                                        (l = 24);
                                    break;
                                }
                                (Kr[o >> 2] = 0), (t = 0);
                                break;
                            }
                            l = 24;
                        } while (0);
                        e: do {
                            if (24 == (0 | l)) {
                                (C = (e + 24) | 0),
                                    (Xr[C >> 0] = u),
                                    (Xr[(e + 25) >> 0] = a),
                                    (o = (e + 176) | 0),
                                    (_ = 0);
                                do {
                                    (I = 0 | Xr[(n + _) >> 0]),
                                        (i = 255 & I),
                                        (I << 24) >> 24 &&
                                            (0 | Kr[(m + (i << 2)) >> 2] ||
                                                ((Kr[R >> 2] = 866),
                                                (Kr[(R + 4) >> 2] = 2276),
                                                (Kr[(R + 8) >> 2] = 977),
                                                He(h, 812, R),
                                                ce(h)),
                                            (I = (s + (i << 2)) | 0),
                                            (i = 0 | Kr[I >> 2]),
                                            (Kr[I >> 2] = i + 1),
                                            i >>> 0 >= c >>> 0 &&
                                                ((Kr[A >> 2] = 866),
                                                (Kr[(A + 4) >> 2] = 2280),
                                                (Kr[(A + 8) >> 2] = 990),
                                                He(h, 812, A),
                                                ce(h)),
                                            (Yr[((0 | Kr[o >> 2]) + (i << 1)) >> 1] = _)),
                                        (_ = (_ + 1) | 0);
                                } while ((0 | _) != (0 | r));
                                if (
                                    ((N = (0 | Zr[C >> 0]) >>> 0 < t >>> 0 ? t : 0),
                                    (I = (e + 8) | 0),
                                    (Kr[I >> 2] = N),
                                    (S = 0 != (0 | N)))
                                ) {
                                    (M = 1 << N), (i = (e + 164) | 0);
                                    do {
                                        if (M >>> 0 > (0 | Kr[i >> 2]) >>> 0) {
                                            (Kr[i >> 2] = M),
                                                (o = (e + 168) | 0),
                                                (i = 0 | Kr[o >> 2]);
                                            do {
                                                if (0 | i) {
                                                    if (
                                                        ((R = 0 | Kr[(i + -4) >> 2]),
                                                        (i = (i + -8) | 0),
                                                        (0 != (0 | R)
                                                            ? (0 | R) == (0 | ~Kr[i >> 2])
                                                            : 0) ||
                                                            ((Kr[d >> 2] = 866),
                                                            (Kr[(d + 4) >> 2] = 651),
                                                            (Kr[(d + 8) >> 2] = 1579),
                                                            He(h, 812, d),
                                                            ce(h)),
                                                        7 & i)
                                                    ) {
                                                        (Kr[O >> 2] = 866),
                                                            (Kr[(O + 4) >> 2] = 2506),
                                                            (Kr[(O + 8) >> 2] = 1232),
                                                            He(h, 812, O),
                                                            ce(h);
                                                        break;
                                                    }
                                                    _e(i, 0, 0, 1, 0);
                                                    break;
                                                }
                                            } while (0);
                                            if (((i = M << 2), (_ = 0 | j((i + 8) | 0, 0)))) {
                                                (O = (_ + 8) | 0),
                                                    (Kr[(_ + 4) >> 2] = M),
                                                    (Kr[_ >> 2] = ~M),
                                                    (Kr[o >> 2] = O),
                                                    (_ = O);
                                                break;
                                            }
                                            (Kr[o >> 2] = 0), (t = 0);
                                            break e;
                                        }
                                        (_ = (e + 168) | 0),
                                            (i = M << 2),
                                            (o = _),
                                            (_ = 0 | Kr[_ >> 2]);
                                    } while (0);
                                    ee(0 | _, -1, 0 | i), (A = (e + 176) | 0), (s = 1);
                                    do {
                                        if (
                                            0 | Kr[(m + (s << 2)) >> 2] &&
                                            ((R = (N - s) | 0),
                                            (d = 1 << R),
                                            (i = (s + -1) | 0),
                                            (_ = 0 | Kr[(P + (i << 2)) >> 2]),
                                            i >>> 0 >= 16 &&
                                                ((Kr[L >> 2] = 866),
                                                (Kr[(L + 4) >> 2] = 1960),
                                                (Kr[(L + 8) >> 2] = 1453),
                                                He(h, 812, L),
                                                ce(h)),
                                            (r = 0 | Kr[(e + 28 + (i << 2)) >> 2]),
                                            (r =
                                                0 == (0 | r)
                                                    ? -1
                                                    : ((r + -1) | 0) >>> ((16 - s) | 0)),
                                            _ >>> 0 <= r >>> 0)
                                        ) {
                                            (c = ((0 | Kr[(e + 96 + (i << 2)) >> 2]) - _) | 0),
                                                (l = s << 16);
                                            do {
                                                (i =
                                                    0 |
                                                    jr[((0 | Kr[A >> 2]) + ((c + _) << 1)) >> 1]),
                                                    (0 | Zr[(n + i) >> 0]) != (0 | s) &&
                                                        ((Kr[b >> 2] = 866),
                                                        (Kr[(b + 4) >> 2] = 2322),
                                                        (Kr[(b + 8) >> 2] = 1019),
                                                        He(h, 812, b),
                                                        ce(h)),
                                                    (T = _ << R),
                                                    (E = i | l),
                                                    (u = 0);
                                                do {
                                                    (f = (u + T) | 0),
                                                        f >>> 0 >= M >>> 0 &&
                                                            ((Kr[F >> 2] = 866),
                                                            (Kr[(F + 4) >> 2] = 2328),
                                                            (Kr[(F + 8) >> 2] = 1053),
                                                            He(h, 812, F),
                                                            ce(h)),
                                                        (i = 0 | Kr[o >> 2]),
                                                        -1 != (0 | Kr[(i + (f << 2)) >> 2]) &&
                                                            ((Kr[U >> 2] = 866),
                                                            (Kr[(U + 4) >> 2] = 2330),
                                                            (Kr[(U + 8) >> 2] = 1076),
                                                            He(h, 812, U),
                                                            ce(h),
                                                            (i = 0 | Kr[o >> 2])),
                                                        (Kr[(i + (f << 2)) >> 2] = E),
                                                        (u = (u + 1) | 0);
                                                } while (u >>> 0 < d >>> 0);
                                                _ = (_ + 1) | 0;
                                            } while (_ >>> 0 <= r >>> 0);
                                        }
                                        s = (s + 1) | 0;
                                    } while (N >>> 0 >= s >>> 0);
                                }
                                (i = (e + 96) | 0),
                                    (Kr[i >> 2] = (0 | Kr[i >> 2]) - (0 | Kr[P >> 2])),
                                    (i = (e + 100) | 0),
                                    (Kr[i >> 2] = (0 | Kr[i >> 2]) - (0 | Kr[(P + 4) >> 2])),
                                    (i = (e + 104) | 0),
                                    (Kr[i >> 2] = (0 | Kr[i >> 2]) - (0 | Kr[(P + 8) >> 2])),
                                    (i = (e + 108) | 0),
                                    (Kr[i >> 2] = (0 | Kr[i >> 2]) - (0 | Kr[(P + 12) >> 2])),
                                    (i = (e + 112) | 0),
                                    (Kr[i >> 2] = (0 | Kr[i >> 2]) - (0 | Kr[(P + 16) >> 2])),
                                    (i = (e + 116) | 0),
                                    (Kr[i >> 2] = (0 | Kr[i >> 2]) - (0 | Kr[(P + 20) >> 2])),
                                    (i = (e + 120) | 0),
                                    (Kr[i >> 2] = (0 | Kr[i >> 2]) - (0 | Kr[(P + 24) >> 2])),
                                    (i = (e + 124) | 0),
                                    (Kr[i >> 2] = (0 | Kr[i >> 2]) - (0 | Kr[(P + 28) >> 2])),
                                    (i = (e + 128) | 0),
                                    (Kr[i >> 2] = (0 | Kr[i >> 2]) - (0 | Kr[(P + 32) >> 2])),
                                    (i = (e + 132) | 0),
                                    (Kr[i >> 2] = (0 | Kr[i >> 2]) - (0 | Kr[(P + 36) >> 2])),
                                    (i = (e + 136) | 0),
                                    (Kr[i >> 2] = (0 | Kr[i >> 2]) - (0 | Kr[(P + 40) >> 2])),
                                    (i = (e + 140) | 0),
                                    (Kr[i >> 2] = (0 | Kr[i >> 2]) - (0 | Kr[(P + 44) >> 2])),
                                    (i = (e + 144) | 0),
                                    (Kr[i >> 2] = (0 | Kr[i >> 2]) - (0 | Kr[(P + 48) >> 2])),
                                    (i = (e + 148) | 0),
                                    (Kr[i >> 2] = (0 | Kr[i >> 2]) - (0 | Kr[(P + 52) >> 2])),
                                    (i = (e + 152) | 0),
                                    (Kr[i >> 2] = (0 | Kr[i >> 2]) - (0 | Kr[(P + 56) >> 2])),
                                    (i = (e + 156) | 0),
                                    (Kr[i >> 2] = (0 | Kr[i >> 2]) - (0 | Kr[(P + 60) >> 2])),
                                    (i = (e + 16) | 0),
                                    (Kr[i >> 2] = 0),
                                    (_ = (e + 20) | 0),
                                    (Kr[_ >> 2] = Zr[C >> 0]);
                                r: do {
                                    if (S) {
                                        do {
                                            if (!t) break r;
                                            (U = t), (t = (t + -1) | 0);
                                        } while (!(0 | Kr[(m + (U << 2)) >> 2]));
                                        if (
                                            ((Kr[i >> 2] = Kr[(e + 28 + (t << 2)) >> 2]),
                                            (t = (N + 1) | 0),
                                            (Kr[_ >> 2] = t),
                                            t >>> 0 <= a >>> 0)
                                        ) {
                                            for (;;) {
                                                if (0 | Kr[(m + (t << 2)) >> 2]) break;
                                                if ((t = (t + 1) | 0) >>> 0 > a >>> 0) break r;
                                            }
                                            Kr[_ >> 2] = t;
                                        }
                                    }
                                } while (0);
                                (Kr[(e + 92) >> 2] = -1),
                                    (Kr[(e + 160) >> 2] = 1048575),
                                    (Kr[(e + 12) >> 2] = 32 - (0 | Kr[I >> 2])),
                                    (t = 1);
                            }
                        } while (0);
                        return (m = t), (on = D), 0 | m;
                    }
                    function E(e, r, n, t, i, _, o, a) {
                        (e |= 0),
                            (r |= 0),
                            (n |= 0),
                            (t |= 0),
                            (i |= 0),
                            (_ |= 0),
                            (o |= 0),
                            (a |= 0);
                        var u = 0,
                            E = 0,
                            f = 0,
                            T = 0,
                            c = 0,
                            l = 0,
                            s = 0,
                            A = 0,
                            R = 0,
                            d = 0,
                            M = 0,
                            S = 0,
                            N = 0,
                            O = 0,
                            C = 0,
                            h = 0,
                            P = 0,
                            L = 0,
                            b = 0,
                            F = 0,
                            U = 0,
                            m = 0,
                            D = 0,
                            p = 0,
                            v = 0,
                            B = 0,
                            k = 0,
                            y = 0,
                            g = 0,
                            w = 0,
                            G = 0,
                            H = 0,
                            X = 0,
                            V = 0,
                            Y = 0,
                            x = 0,
                            K = 0,
                            W = 0,
                            Z = 0,
                            z = 0,
                            j = 0,
                            J = 0,
                            Q = 0,
                            q = 0,
                            $ = 0,
                            ee = 0,
                            re = 0,
                            ne = 0,
                            te = 0,
                            ie = 0;
                        if (
                            ((ne = on),
                            (on = (on + 656) | 0),
                            (ee = (ne + 112) | 0),
                            (q = (ne + 96) | 0),
                            (Q = (ne + 80) | 0),
                            (J = (ne + 64) | 0),
                            (j = (ne + 48) | 0),
                            (re = (ne + 32) | 0),
                            ($ = (ne + 16) | 0),
                            (z = ne),
                            (W = (ne + 144) | 0),
                            (Z = (ne + 128) | 0),
                            (y = (e + 240) | 0),
                            (g = 0 | Kr[y >> 2]),
                            (w = (e + 256) | 0),
                            (G = 0 | Kr[w >> 2]),
                            (K = 0 | Xr[(17 + (0 | Kr[(e + 88) >> 2])) >> 0]),
                            (H = 255 & K),
                            (X = t >>> 2),
                            !((K << 24) >> 24))
                        )
                            return (on = ne), 1;
                        (V = 0 == (0 | a)),
                            (Y = (o + -1) | 0),
                            (x = Y << 4),
                            (K = (a + -1) | 0),
                            (m = 0 != ((1 & _) | 0)),
                            (D = t << 1),
                            (p = (e + 92) | 0),
                            (v = (e + 116) | 0),
                            (B = (e + 140) | 0),
                            (k = (e + 236) | 0),
                            (U = 0 != ((1 & i) | 0)),
                            (F = (e + 188) | 0),
                            (h = (e + 252) | 0),
                            (P = (X + 1) | 0),
                            (L = (X + 2) | 0),
                            (b = (X + 3) | 0),
                            (C = 0),
                            (_ = 0),
                            (n = 0),
                            (i = 1);
                        do {
                            if (!V)
                                for (N = 0 | Kr[(r + (C << 2)) >> 2], O = 0; ; ) {
                                    if (
                                        ((M = 1 & O),
                                        (E = 0 == (0 | M)),
                                        (d = (((M << 5) ^ 32) - 16) | 0),
                                        (M = (((M << 1) ^ 2) - 1) | 0),
                                        (R = E ? o : -1),
                                        (u = E ? 0 : Y),
                                        (e = (0 | O) == (0 | K)),
                                        (S = m & e),
                                        (0 | u) != (0 | R))
                                    )
                                        for (A = (m & e) ^ 1, s = E ? N : (N + x) | 0; ; ) {
                                            1 == (0 | i) && (i = 512 | I(p, v)),
                                                (l = 7 & i),
                                                (i >>>= 3),
                                                (E = 0 | Zr[(1539 + l) >> 0]),
                                                (e = 0);
                                            do {
                                                (f = ((0 | I(p, B)) + n) | 0),
                                                    (T = (f - g) | 0),
                                                    (c = T >> 31),
                                                    (n = (c & f) | (T & ~c)),
                                                    (0 | Kr[y >> 2]) >>> 0 <= n >>> 0 &&
                                                        ((Kr[z >> 2] = 866),
                                                        (Kr[(z + 4) >> 2] = 910),
                                                        (Kr[(z + 8) >> 2] = 1497),
                                                        He(W, 812, z),
                                                        ce(W)),
                                                    (Kr[(Z + (e << 2)) >> 2] =
                                                        Kr[((0 | Kr[k >> 2]) + (n << 2)) >> 2]),
                                                    (e = (e + 1) | 0);
                                            } while (e >>> 0 < E >>> 0);
                                            if (((c = U & ((0 | u) == (0 | Y))), S | c)) {
                                                T = 0;
                                                do {
                                                    (e = (s + (0 | cn(T, t))) | 0),
                                                        (f = (0 == (0 | T)) | A),
                                                        (E = T << 1),
                                                        (ie = ((0 | I(p, F)) + _) | 0),
                                                        (te = (ie - G) | 0),
                                                        (_ = te >> 31),
                                                        (_ = (_ & ie) | (te & ~_));
                                                    do {
                                                        if (c) {
                                                            if (!f) {
                                                                (te = ((0 | I(p, F)) + _) | 0),
                                                                    (ie = (te - G) | 0),
                                                                    (_ = ie >> 31),
                                                                    (_ = (_ & te) | (ie & ~_));
                                                                break;
                                                            }
                                                            (Kr[e >> 2] =
                                                                Kr[
                                                                    (Z +
                                                                        ((0 |
                                                                            Zr[
                                                                                (1547 +
                                                                                    (l << 2) +
                                                                                    E) >>
                                                                                    0
                                                                            ]) <<
                                                                            2)) >>
                                                                        2
                                                                ]),
                                                                (0 | Kr[w >> 2]) >>> 0 <= _ >>> 0 &&
                                                                    ((Kr[q >> 2] = 866),
                                                                    (Kr[(q + 4) >> 2] = 910),
                                                                    (Kr[(q + 8) >> 2] = 1497),
                                                                    He(W, 812, q),
                                                                    ce(W)),
                                                                (Kr[(e + 4) >> 2] =
                                                                    Kr[
                                                                        ((0 | Kr[h >> 2]) +
                                                                            (_ << 2)) >>
                                                                            2
                                                                    ]),
                                                                (te = ((0 | I(p, F)) + _) | 0),
                                                                (ie = (te - G) | 0),
                                                                (_ = ie >> 31),
                                                                (_ = (_ & te) | (ie & ~_));
                                                        } else
                                                            f &&
                                                                ((Kr[e >> 2] =
                                                                    Kr[
                                                                        (Z +
                                                                            ((0 |
                                                                                Zr[
                                                                                    (1547 +
                                                                                        (l << 2) +
                                                                                        E) >>
                                                                                        0
                                                                                ]) <<
                                                                                2)) >>
                                                                            2
                                                                    ]),
                                                                (0 | Kr[w >> 2]) >>> 0 <= _ >>> 0 &&
                                                                    ((Kr[Q >> 2] = 866),
                                                                    (Kr[(Q + 4) >> 2] = 910),
                                                                    (Kr[(Q + 8) >> 2] = 1497),
                                                                    He(W, 812, Q),
                                                                    ce(W)),
                                                                (Kr[(e + 4) >> 2] =
                                                                    Kr[
                                                                        ((0 | Kr[h >> 2]) +
                                                                            (_ << 2)) >>
                                                                            2
                                                                    ])),
                                                                (e = (e + 8) | 0),
                                                                (te = ((0 | I(p, F)) + _) | 0),
                                                                (ie = (te - G) | 0),
                                                                (_ = ie >> 31),
                                                                (_ = (_ & te) | (ie & ~_)),
                                                                f &&
                                                                    ((Kr[e >> 2] =
                                                                        Kr[
                                                                            (Z +
                                                                                ((0 |
                                                                                    Zr[
                                                                                        (1547 +
                                                                                            (l <<
                                                                                                2) +
                                                                                            (1 |
                                                                                                E)) >>
                                                                                            0
                                                                                    ]) <<
                                                                                    2)) >>
                                                                                2
                                                                        ]),
                                                                    (0 | Kr[w >> 2]) >>> 0 <=
                                                                        _ >>> 0 &&
                                                                        ((Kr[ee >> 2] = 866),
                                                                        (Kr[(ee + 4) >> 2] = 910),
                                                                        (Kr[(ee + 8) >> 2] = 1497),
                                                                        He(W, 812, ee),
                                                                        ce(W)),
                                                                    (Kr[(e + 4) >> 2] =
                                                                        Kr[
                                                                            ((0 | Kr[h >> 2]) +
                                                                                (_ << 2)) >>
                                                                                2
                                                                        ]));
                                                    } while (0);
                                                    T = (T + 1) | 0;
                                                } while (2 != (0 | T));
                                            } else
                                                (Kr[s >> 2] =
                                                    Kr[
                                                        (Z +
                                                            ((0 | Zr[(1547 + (l << 2)) >> 0]) <<
                                                                2)) >>
                                                            2
                                                    ]),
                                                    (te = ((0 | I(p, F)) + _) | 0),
                                                    (ie = (te - G) | 0),
                                                    (_ = ie >> 31),
                                                    (_ = (_ & te) | (ie & ~_)),
                                                    (0 | Kr[w >> 2]) >>> 0 <= _ >>> 0 &&
                                                        ((Kr[$ >> 2] = 866),
                                                        (Kr[($ + 4) >> 2] = 910),
                                                        (Kr[($ + 8) >> 2] = 1497),
                                                        He(W, 812, $),
                                                        ce(W)),
                                                    (Kr[(s + 4) >> 2] =
                                                        Kr[((0 | Kr[h >> 2]) + (_ << 2)) >> 2]),
                                                    (Kr[(s + 8) >> 2] =
                                                        Kr[
                                                            (Z +
                                                                ((0 |
                                                                    Zr[
                                                                        (1547 + (l << 2) + 1) >> 0
                                                                    ]) <<
                                                                    2)) >>
                                                                2
                                                        ]),
                                                    (te = ((0 | I(p, F)) + _) | 0),
                                                    (ie = (te - G) | 0),
                                                    (_ = ie >> 31),
                                                    (_ = (_ & te) | (ie & ~_)),
                                                    (0 | Kr[w >> 2]) >>> 0 <= _ >>> 0 &&
                                                        ((Kr[re >> 2] = 866),
                                                        (Kr[(re + 4) >> 2] = 910),
                                                        (Kr[(re + 8) >> 2] = 1497),
                                                        He(W, 812, re),
                                                        ce(W)),
                                                    (Kr[(s + 12) >> 2] =
                                                        Kr[((0 | Kr[h >> 2]) + (_ << 2)) >> 2]),
                                                    (Kr[(s + (X << 2)) >> 2] =
                                                        Kr[
                                                            (Z +
                                                                ((0 |
                                                                    Zr[
                                                                        (1547 + (l << 2) + 2) >> 0
                                                                    ]) <<
                                                                    2)) >>
                                                                2
                                                        ]),
                                                    (te = ((0 | I(p, F)) + _) | 0),
                                                    (ie = (te - G) | 0),
                                                    (_ = ie >> 31),
                                                    (_ = (_ & te) | (ie & ~_)),
                                                    (0 | Kr[w >> 2]) >>> 0 <= _ >>> 0 &&
                                                        ((Kr[j >> 2] = 866),
                                                        (Kr[(j + 4) >> 2] = 910),
                                                        (Kr[(j + 8) >> 2] = 1497),
                                                        He(W, 812, j),
                                                        ce(W)),
                                                    (Kr[(s + (P << 2)) >> 2] =
                                                        Kr[((0 | Kr[h >> 2]) + (_ << 2)) >> 2]),
                                                    (Kr[(s + (L << 2)) >> 2] =
                                                        Kr[
                                                            (Z +
                                                                ((0 |
                                                                    Zr[
                                                                        (1547 + (l << 2) + 3) >> 0
                                                                    ]) <<
                                                                    2)) >>
                                                                2
                                                        ]),
                                                    (te = ((0 | I(p, F)) + _) | 0),
                                                    (ie = (te - G) | 0),
                                                    (_ = ie >> 31),
                                                    (_ = (_ & te) | (ie & ~_)),
                                                    (0 | Kr[w >> 2]) >>> 0 <= _ >>> 0 &&
                                                        ((Kr[J >> 2] = 866),
                                                        (Kr[(J + 4) >> 2] = 910),
                                                        (Kr[(J + 8) >> 2] = 1497),
                                                        He(W, 812, J),
                                                        ce(W)),
                                                    (Kr[(s + (b << 2)) >> 2] =
                                                        Kr[((0 | Kr[h >> 2]) + (_ << 2)) >> 2]);
                                            if ((0 | (u = (M + u) | 0)) == (0 | R)) break;
                                            s = (s + d) | 0;
                                        }
                                    if ((0 | (O = (O + 1) | 0)) == (0 | a)) break;
                                    N = (N + D) | 0;
                                }
                            C = (C + 1) | 0;
                        } while ((0 | C) != (0 | H));
                        return (on = ne), 1;
                    }
                    function f(e, r, n, t, i, _, o, a) {
                        (e |= 0),
                            (r |= 0),
                            (n |= 0),
                            (t |= 0),
                            (i |= 0),
                            (_ |= 0),
                            (o |= 0),
                            (a |= 0);
                        var u = 0,
                            E = 0,
                            f = 0,
                            T = 0,
                            c = 0,
                            l = 0,
                            s = 0,
                            A = 0,
                            R = 0,
                            d = 0,
                            M = 0,
                            S = 0,
                            N = 0,
                            O = 0,
                            C = 0,
                            h = 0,
                            P = 0,
                            L = 0,
                            b = 0,
                            F = 0,
                            U = 0,
                            m = 0,
                            D = 0,
                            p = 0,
                            v = 0,
                            B = 0,
                            k = 0,
                            y = 0,
                            g = 0,
                            w = 0,
                            G = 0,
                            H = 0,
                            X = 0,
                            V = 0,
                            Y = 0,
                            x = 0,
                            K = 0,
                            W = 0,
                            Z = 0,
                            z = 0,
                            j = 0,
                            J = 0,
                            Q = 0,
                            q = 0,
                            $ = 0,
                            ee = 0,
                            re = 0,
                            ne = 0,
                            te = 0,
                            ie = 0,
                            _e = 0,
                            oe = 0;
                        if (
                            ((oe = on),
                            (on = (on + 640) | 0),
                            (te = (oe + 80) | 0),
                            (ne = (oe + 64) | 0),
                            (re = (oe + 48) | 0),
                            (_e = (oe + 32) | 0),
                            (ie = (oe + 16) | 0),
                            (ee = oe),
                            (q = (oe + 128) | 0),
                            ($ = (oe + 112) | 0),
                            (g = (oe + 96) | 0),
                            (w = (e + 272) | 0),
                            (G = 0 | Kr[w >> 2]),
                            (Q = 0 | Kr[(e + 88) >> 2]),
                            (H = ((0 | Zr[(Q + 63) >> 0]) << 8) | 0 | Zr[(Q + 64) >> 0]),
                            (Q = 0 | Xr[(Q + 17) >> 0]),
                            (X = 255 & Q),
                            !((Q << 24) >> 24))
                        )
                            return (on = oe), 1;
                        (V = 0 == (0 | a)),
                            (Y = (o + -1) | 0),
                            (x = Y << 5),
                            (K = (a + -1) | 0),
                            (W = t << 1),
                            (Z = (e + 92) | 0),
                            (z = (e + 116) | 0),
                            (j = (e + 164) | 0),
                            (J = (e + 268) | 0),
                            (Q = (e + 212) | 0),
                            (y = 0 == ((1 & i) | 0)),
                            (k = 0 == ((1 & _) | 0)),
                            (B = (e + 288) | 0),
                            (v = (e + 284) | 0),
                            (p = 0),
                            (e = 0),
                            (_ = 0),
                            (i = 0),
                            (n = 0),
                            (u = 1);
                        do {
                            if (!V)
                                for (m = 0 | Kr[(r + (p << 2)) >> 2], D = 0; ; ) {
                                    if (
                                        ((U = 1 & D),
                                        (f = 0 == (0 | U)),
                                        (F = (((U << 6) ^ 64) - 32) | 0),
                                        (U = (((U << 1) ^ 2) - 1) | 0),
                                        (L = f ? o : -1),
                                        (0 | (E = f ? 0 : Y)) != (0 | L))
                                    )
                                        for (
                                            b = k | ((0 | D) != (0 | K)), P = f ? m : (m + x) | 0;
                                            ;

                                        ) {
                                            1 == (0 | u) && (u = 512 | I(Z, z)),
                                                (h = 7 & u),
                                                (u >>>= 3),
                                                (T = 0 | Zr[(1539 + h) >> 0]),
                                                (f = 0);
                                            do {
                                                (N = ((0 | I(Z, j)) + n) | 0),
                                                    (O = (N - G) | 0),
                                                    (C = O >> 31),
                                                    (n = (C & N) | (O & ~C)),
                                                    (0 | Kr[w >> 2]) >>> 0 <= n >>> 0 &&
                                                        ((Kr[ee >> 2] = 866),
                                                        (Kr[(ee + 4) >> 2] = 910),
                                                        (Kr[(ee + 8) >> 2] = 1497),
                                                        He(q, 812, ee),
                                                        ce(q)),
                                                    (Kr[($ + (f << 2)) >> 2] =
                                                        jr[((0 | Kr[J >> 2]) + (n << 1)) >> 1]),
                                                    (f = (f + 1) | 0);
                                            } while (f >>> 0 < T >>> 0);
                                            f = 0;
                                            do {
                                                (N = ((0 | I(Z, j)) + _) | 0),
                                                    (O = (N - G) | 0),
                                                    (C = O >> 31),
                                                    (_ = (C & N) | (O & ~C)),
                                                    (0 | Kr[w >> 2]) >>> 0 <= _ >>> 0 &&
                                                        ((Kr[ie >> 2] = 866),
                                                        (Kr[(ie + 4) >> 2] = 910),
                                                        (Kr[(ie + 8) >> 2] = 1497),
                                                        He(q, 812, ie),
                                                        ce(q)),
                                                    (Kr[(g + (f << 2)) >> 2] =
                                                        jr[((0 | Kr[J >> 2]) + (_ << 1)) >> 1]),
                                                    (f = (f + 1) | 0);
                                            } while (f >>> 0 < T >>> 0);
                                            for (C = y | ((0 | E) != (0 | Y)), N = 0, O = P; ; ) {
                                                if (((d = b | (0 == (0 | N))), (M = N << 1), C))
                                                    for (A = 0, R = O; ; ) {
                                                        if (
                                                            ((S = ((0 | I(Z, Q)) + i) | 0),
                                                            (s = (S - H) | 0),
                                                            (i = s >> 31),
                                                            (i = (i & S) | (s & ~i)),
                                                            (s = ((0 | I(Z, Q)) + e) | 0),
                                                            (S = (s - H) | 0),
                                                            (e = S >> 31),
                                                            (e = (e & s) | (S & ~e)),
                                                            d &&
                                                                ((s =
                                                                    0 |
                                                                    Zr[
                                                                        (A +
                                                                            M +
                                                                            (1547 + (h << 2))) >>
                                                                            0
                                                                    ]),
                                                                (T = (3 * i) | 0),
                                                                (f = 0 | Kr[B >> 2]),
                                                                f >>> 0 <= T >>> 0 &&
                                                                    ((Kr[_e >> 2] = 866),
                                                                    (Kr[(_e + 4) >> 2] = 910),
                                                                    (Kr[(_e + 8) >> 2] = 1497),
                                                                    He(q, 812, _e),
                                                                    ce(q),
                                                                    (f = 0 | Kr[B >> 2])),
                                                                (c = 0 | Kr[v >> 2]),
                                                                (T = (c + (T << 1)) | 0),
                                                                (l = (3 * e) | 0),
                                                                f >>> 0 > l >>> 0
                                                                    ? (f = c)
                                                                    : ((Kr[re >> 2] = 866),
                                                                      (Kr[(re + 4) >> 2] = 910),
                                                                      (Kr[(re + 8) >> 2] = 1497),
                                                                      He(q, 812, re),
                                                                      ce(q),
                                                                      (f = 0 | Kr[v >> 2])),
                                                                (S = (f + (l << 1)) | 0),
                                                                (Kr[R >> 2] =
                                                                    ((0 | jr[T >> 1]) << 16) |
                                                                    Kr[($ + (s << 2)) >> 2]),
                                                                (Kr[(R + 4) >> 2] =
                                                                    ((0 | jr[(T + 4) >> 1]) << 16) |
                                                                    0 |
                                                                    jr[(T + 2) >> 1]),
                                                                (Kr[(R + 8) >> 2] =
                                                                    ((0 | jr[S >> 1]) << 16) |
                                                                    Kr[(g + (s << 2)) >> 2]),
                                                                (Kr[(R + 12) >> 2] =
                                                                    ((0 | jr[(S + 4) >> 1]) << 16) |
                                                                    0 |
                                                                    jr[(S + 2) >> 1])),
                                                            2 == (0 | (A = (A + 1) | 0)))
                                                        )
                                                            break;
                                                        R = (R + 16) | 0;
                                                    }
                                                else
                                                    for (
                                                        S = 1 ^ d,
                                                            d = (1547 + (h << 2) + M) | 0,
                                                            A = 0,
                                                            R = O;
                                                        ;

                                                    ) {
                                                        if (
                                                            ((M = ((0 | I(Z, Q)) + i) | 0),
                                                            (s = (M - H) | 0),
                                                            (i = s >> 31),
                                                            (i = (i & M) | (s & ~i)),
                                                            (s = ((0 | I(Z, Q)) + e) | 0),
                                                            (M = (s - H) | 0),
                                                            (e = M >> 31),
                                                            (e = (e & s) | (M & ~e)),
                                                            (0 != (0 | A)) | S ||
                                                                ((s = 0 | Zr[d >> 0]),
                                                                (T = (3 * i) | 0),
                                                                (f = 0 | Kr[B >> 2]),
                                                                f >>> 0 <= T >>> 0 &&
                                                                    ((Kr[ne >> 2] = 866),
                                                                    (Kr[(ne + 4) >> 2] = 910),
                                                                    (Kr[(ne + 8) >> 2] = 1497),
                                                                    He(q, 812, ne),
                                                                    ce(q),
                                                                    (f = 0 | Kr[B >> 2])),
                                                                (c = 0 | Kr[v >> 2]),
                                                                (T = (c + (T << 1)) | 0),
                                                                (l = (3 * e) | 0),
                                                                f >>> 0 > l >>> 0
                                                                    ? (f = c)
                                                                    : ((Kr[te >> 2] = 866),
                                                                      (Kr[(te + 4) >> 2] = 910),
                                                                      (Kr[(te + 8) >> 2] = 1497),
                                                                      He(q, 812, te),
                                                                      ce(q),
                                                                      (f = 0 | Kr[v >> 2])),
                                                                (M = (f + (l << 1)) | 0),
                                                                (Kr[R >> 2] =
                                                                    ((0 | jr[T >> 1]) << 16) |
                                                                    Kr[($ + (s << 2)) >> 2]),
                                                                (Kr[(R + 4) >> 2] =
                                                                    ((0 | jr[(T + 4) >> 1]) << 16) |
                                                                    0 |
                                                                    jr[(T + 2) >> 1]),
                                                                (Kr[(R + 8) >> 2] =
                                                                    ((0 | jr[M >> 1]) << 16) |
                                                                    Kr[(g + (s << 2)) >> 2]),
                                                                (Kr[(R + 12) >> 2] =
                                                                    ((0 | jr[(M + 4) >> 1]) << 16) |
                                                                    0 |
                                                                    jr[(M + 2) >> 1])),
                                                            2 == (0 | (A = (A + 1) | 0)))
                                                        )
                                                            break;
                                                        R = (R + 16) | 0;
                                                    }
                                                if (2 == (0 | (N = (N + 1) | 0))) break;
                                                O = (O + t) | 0;
                                            }
                                            if ((0 | (E = (U + E) | 0)) == (0 | L)) break;
                                            P = (P + F) | 0;
                                        }
                                    if ((0 | (D = (D + 1) | 0)) == (0 | a)) break;
                                    m = (m + W) | 0;
                                }
                            p = (p + 1) | 0;
                        } while ((0 | p) != (0 | X));
                        return (on = oe), 1;
                    }
                    function T(e) {
                        e |= 0;
                        var r = 0,
                            n = 0,
                            t = 0,
                            i = 0,
                            _ = 0,
                            o = 0,
                            a = 0,
                            u = 0;
                        if (e) {
                            (n = (e + -8) | 0),
                                (i = 0 | Kr[1148]),
                                (e = 0 | Kr[(e + -4) >> 2]),
                                (r = -8 & e),
                                (u = (n + r) | 0);
                            do {
                                if (1 & e) (a = n), (o = n);
                                else {
                                    if (((t = 0 | Kr[n >> 2]), !(3 & e))) return;
                                    if (
                                        ((o = (n + (0 - t)) | 0),
                                        (_ = (t + r) | 0),
                                        o >>> 0 < i >>> 0)
                                    )
                                        return;
                                    if ((0 | o) == (0 | Kr[1149])) {
                                        if (
                                            ((e = (u + 4) | 0),
                                            3 != ((3 & (r = 0 | Kr[e >> 2])) | 0))
                                        ) {
                                            (a = o), (r = _);
                                            break;
                                        }
                                        return (
                                            (Kr[1146] = _),
                                            (Kr[e >> 2] = -2 & r),
                                            (Kr[(o + 4) >> 2] = 1 | _),
                                            void (Kr[(o + _) >> 2] = _)
                                        );
                                    }
                                    if (((n = t >>> 3), t >>> 0 < 256)) {
                                        if (
                                            ((e = 0 | Kr[(o + 8) >> 2]),
                                            (0 | (r = 0 | Kr[(o + 12) >> 2])) == (0 | e))
                                        ) {
                                            (Kr[1144] = Kr[1144] & ~(1 << n)), (a = o), (r = _);
                                            break;
                                        }
                                        (Kr[(e + 12) >> 2] = r),
                                            (Kr[(r + 8) >> 2] = e),
                                            (a = o),
                                            (r = _);
                                        break;
                                    }
                                    (i = 0 | Kr[(o + 24) >> 2]), (e = 0 | Kr[(o + 12) >> 2]);
                                    do {
                                        if ((0 | e) == (0 | o)) {
                                            if (
                                                ((n = (o + 16) | 0),
                                                (r = (n + 4) | 0),
                                                !(e = 0 | Kr[r >> 2]))
                                            ) {
                                                if (!(e = 0 | Kr[n >> 2])) {
                                                    e = 0;
                                                    break;
                                                }
                                                r = n;
                                            }
                                            for (;;)
                                                if (((n = (e + 20) | 0), 0 | (t = 0 | Kr[n >> 2])))
                                                    (e = t), (r = n);
                                                else {
                                                    if (((n = (e + 16) | 0), !(t = 0 | Kr[n >> 2])))
                                                        break;
                                                    (e = t), (r = n);
                                                }
                                            Kr[r >> 2] = 0;
                                        } else
                                            (a = 0 | Kr[(o + 8) >> 2]),
                                                (Kr[(a + 12) >> 2] = e),
                                                (Kr[(e + 8) >> 2] = a);
                                    } while (0);
                                    if (i) {
                                        if (
                                            ((r = 0 | Kr[(o + 28) >> 2]),
                                            (n = (4880 + (r << 2)) | 0),
                                            (0 | o) == (0 | Kr[n >> 2]))
                                        ) {
                                            if (((Kr[n >> 2] = e), !e)) {
                                                (Kr[1145] = Kr[1145] & ~(1 << r)), (a = o), (r = _);
                                                break;
                                            }
                                        } else if (
                                            ((Kr[
                                                (i +
                                                    16 +
                                                    ((((0 | Kr[(i + 16) >> 2]) != (0 | o)) & 1) <<
                                                        2)) >>
                                                    2
                                            ] = e),
                                            !e)
                                        ) {
                                            (a = o), (r = _);
                                            break;
                                        }
                                        (Kr[(e + 24) >> 2] = i),
                                            (r = (o + 16) | 0),
                                            (n = 0 | Kr[r >> 2]),
                                            0 | n &&
                                                ((Kr[(e + 16) >> 2] = n), (Kr[(n + 24) >> 2] = e)),
                                            (r = 0 | Kr[(r + 4) >> 2]),
                                            r
                                                ? ((Kr[(e + 20) >> 2] = r),
                                                  (Kr[(r + 24) >> 2] = e),
                                                  (a = o),
                                                  (r = _))
                                                : ((a = o), (r = _));
                                    } else (a = o), (r = _);
                                }
                            } while (0);
                            if (
                                !(o >>> 0 >= u >>> 0) &&
                                ((e = (u + 4) | 0), 1 & (t = 0 | Kr[e >> 2]))
                            ) {
                                if (2 & t)
                                    (Kr[e >> 2] = -2 & t),
                                        (Kr[(a + 4) >> 2] = 1 | r),
                                        (Kr[(o + r) >> 2] = r),
                                        (i = r);
                                else {
                                    if (((e = 0 | Kr[1149]), (0 | u) == (0 | Kr[1150]))) {
                                        if (
                                            ((u = ((0 | Kr[1147]) + r) | 0),
                                            (Kr[1147] = u),
                                            (Kr[1150] = a),
                                            (Kr[(a + 4) >> 2] = 1 | u),
                                            (0 | a) != (0 | e))
                                        )
                                            return;
                                        return (Kr[1149] = 0), void (Kr[1146] = 0);
                                    }
                                    if ((0 | u) == (0 | e))
                                        return (
                                            (u = ((0 | Kr[1146]) + r) | 0),
                                            (Kr[1146] = u),
                                            (Kr[1149] = o),
                                            (Kr[(a + 4) >> 2] = 1 | u),
                                            void (Kr[(o + u) >> 2] = u)
                                        );
                                    (i = ((-8 & t) + r) | 0), (n = t >>> 3);
                                    do {
                                        if (t >>> 0 < 256) {
                                            if (
                                                ((r = 0 | Kr[(u + 8) >> 2]),
                                                (0 | (e = 0 | Kr[(u + 12) >> 2])) == (0 | r))
                                            ) {
                                                Kr[1144] = Kr[1144] & ~(1 << n);
                                                break;
                                            }
                                            (Kr[(r + 12) >> 2] = e), (Kr[(e + 8) >> 2] = r);
                                            break;
                                        }
                                        (_ = 0 | Kr[(u + 24) >> 2]), (e = 0 | Kr[(u + 12) >> 2]);
                                        do {
                                            if ((0 | e) == (0 | u)) {
                                                if (
                                                    ((n = (u + 16) | 0),
                                                    (r = (n + 4) | 0),
                                                    !(e = 0 | Kr[r >> 2]))
                                                ) {
                                                    if (!(e = 0 | Kr[n >> 2])) {
                                                        n = 0;
                                                        break;
                                                    }
                                                    r = n;
                                                }
                                                for (;;)
                                                    if (
                                                        ((n = (e + 20) | 0),
                                                        0 | (t = 0 | Kr[n >> 2]))
                                                    )
                                                        (e = t), (r = n);
                                                    else {
                                                        if (
                                                            ((n = (e + 16) | 0),
                                                            !(t = 0 | Kr[n >> 2]))
                                                        )
                                                            break;
                                                        (e = t), (r = n);
                                                    }
                                                (Kr[r >> 2] = 0), (n = e);
                                            } else
                                                (n = 0 | Kr[(u + 8) >> 2]),
                                                    (Kr[(n + 12) >> 2] = e),
                                                    (Kr[(e + 8) >> 2] = n),
                                                    (n = e);
                                        } while (0);
                                        if (0 | _) {
                                            if (
                                                ((e = 0 | Kr[(u + 28) >> 2]),
                                                (r = (4880 + (e << 2)) | 0),
                                                (0 | u) == (0 | Kr[r >> 2]))
                                            ) {
                                                if (((Kr[r >> 2] = n), !n)) {
                                                    Kr[1145] = Kr[1145] & ~(1 << e);
                                                    break;
                                                }
                                            } else if (
                                                ((Kr[
                                                    (_ +
                                                        16 +
                                                        ((((0 | Kr[(_ + 16) >> 2]) != (0 | u)) &
                                                            1) <<
                                                            2)) >>
                                                        2
                                                ] = n),
                                                !n)
                                            )
                                                break;
                                            (Kr[(n + 24) >> 2] = _),
                                                (e = (u + 16) | 0),
                                                (r = 0 | Kr[e >> 2]),
                                                0 | r &&
                                                    ((Kr[(n + 16) >> 2] = r),
                                                    (Kr[(r + 24) >> 2] = n)),
                                                (e = 0 | Kr[(e + 4) >> 2]),
                                                0 | e &&
                                                    ((Kr[(n + 20) >> 2] = e),
                                                    (Kr[(e + 24) >> 2] = n));
                                        }
                                    } while (0);
                                    if (
                                        ((Kr[(a + 4) >> 2] = 1 | i),
                                        (Kr[(o + i) >> 2] = i),
                                        (0 | a) == (0 | Kr[1149]))
                                    )
                                        return void (Kr[1146] = i);
                                }
                                if (((e = i >>> 3), i >>> 0 < 256))
                                    return (
                                        (n = (4616 + ((e << 1) << 2)) | 0),
                                        (r = 0 | Kr[1144]),
                                        (e = 1 << e),
                                        r & e
                                            ? ((r = (n + 8) | 0), (e = 0 | Kr[r >> 2]))
                                            : ((Kr[1144] = r | e), (e = n), (r = (n + 8) | 0)),
                                        (Kr[r >> 2] = a),
                                        (Kr[(e + 12) >> 2] = a),
                                        (Kr[(a + 8) >> 2] = e),
                                        void (Kr[(a + 12) >> 2] = n)
                                    );
                                (e = i >>> 8),
                                    e
                                        ? i >>> 0 > 16777215
                                            ? (e = 31)
                                            : ((o = (((e + 1048320) | 0) >>> 16) & 8),
                                              (u = e << o),
                                              (_ = (((u + 520192) | 0) >>> 16) & 4),
                                              (u <<= _),
                                              (e = (((u + 245760) | 0) >>> 16) & 2),
                                              (e = (14 - (_ | o | e) + ((u << e) >>> 15)) | 0),
                                              (e = ((i >>> ((e + 7) | 0)) & 1) | (e << 1)))
                                        : (e = 0),
                                    (t = (4880 + (e << 2)) | 0),
                                    (Kr[(a + 28) >> 2] = e),
                                    (Kr[(a + 20) >> 2] = 0),
                                    (Kr[(a + 16) >> 2] = 0),
                                    (r = 0 | Kr[1145]),
                                    (n = 1 << e);
                                do {
                                    if (r & n) {
                                        for (
                                            r = i << (31 == (0 | e) ? 0 : (25 - (e >>> 1)) | 0),
                                                n = 0 | Kr[t >> 2];
                                            ;

                                        ) {
                                            if (((-8 & Kr[(n + 4) >> 2]) | 0) == (0 | i)) {
                                                e = 73;
                                                break;
                                            }
                                            if (
                                                ((t = (n + 16 + ((r >>> 31) << 2)) | 0),
                                                !(e = 0 | Kr[t >> 2]))
                                            ) {
                                                e = 72;
                                                break;
                                            }
                                            (r <<= 1), (n = e);
                                        }
                                        if (72 == (0 | e)) {
                                            (Kr[t >> 2] = a),
                                                (Kr[(a + 24) >> 2] = n),
                                                (Kr[(a + 12) >> 2] = a),
                                                (Kr[(a + 8) >> 2] = a);
                                            break;
                                        }
                                        if (73 == (0 | e)) {
                                            (o = (n + 8) | 0),
                                                (u = 0 | Kr[o >> 2]),
                                                (Kr[(u + 12) >> 2] = a),
                                                (Kr[o >> 2] = a),
                                                (Kr[(a + 8) >> 2] = u),
                                                (Kr[(a + 12) >> 2] = n),
                                                (Kr[(a + 24) >> 2] = 0);
                                            break;
                                        }
                                    } else
                                        (Kr[1145] = r | n),
                                            (Kr[t >> 2] = a),
                                            (Kr[(a + 24) >> 2] = t),
                                            (Kr[(a + 12) >> 2] = a),
                                            (Kr[(a + 8) >> 2] = a);
                                } while (0);
                                if (((u = ((0 | Kr[1152]) - 1) | 0), (Kr[1152] = u), !u)) {
                                    for (e = 5032; ; ) {
                                        if (!(e = 0 | Kr[e >> 2])) break;
                                        e = (e + 8) | 0;
                                    }
                                    Kr[1152] = -1;
                                }
                            }
                        }
                    }
                    function c(e, r, n, t, i, _, o, a) {
                        (e |= 0),
                            (r |= 0),
                            (n |= 0),
                            (t |= 0),
                            (i |= 0),
                            (_ |= 0),
                            (o |= 0),
                            (a |= 0);
                        var u = 0,
                            E = 0,
                            f = 0,
                            T = 0,
                            c = 0,
                            l = 0,
                            s = 0,
                            A = 0,
                            R = 0,
                            d = 0,
                            M = 0,
                            S = 0,
                            N = 0,
                            O = 0,
                            C = 0,
                            h = 0,
                            P = 0,
                            L = 0,
                            b = 0,
                            F = 0,
                            U = 0,
                            m = 0,
                            D = 0,
                            p = 0,
                            v = 0,
                            B = 0,
                            k = 0,
                            y = 0,
                            g = 0,
                            w = 0,
                            G = 0,
                            H = 0,
                            X = 0,
                            V = 0,
                            Y = 0,
                            x = 0,
                            K = 0,
                            W = 0,
                            Z = 0,
                            z = 0,
                            j = 0,
                            J = 0,
                            Q = 0,
                            q = 0,
                            $ = 0,
                            ee = 0,
                            re = 0,
                            ne = 0,
                            te = 0,
                            ie = 0,
                            _e = 0,
                            oe = 0,
                            ae = 0,
                            ue = 0,
                            Ee = 0,
                            fe = 0,
                            Te = 0;
                        if (
                            ((Te = on),
                            (on = (on + 640) | 0),
                            (ue = (Te + 80) | 0),
                            (ae = (Te + 64) | 0),
                            (oe = (Te + 48) | 0),
                            (fe = (Te + 32) | 0),
                            (Ee = (Te + 16) | 0),
                            (_e = Te),
                            (te = (Te + 128) | 0),
                            (ie = (Te + 112) | 0),
                            (k = (Te + 96) | 0),
                            (y = (e + 240) | 0),
                            (g = 0 | Kr[y >> 2]),
                            (w = (e + 256) | 0),
                            (G = 0 | Kr[w >> 2]),
                            (H = (e + 272) | 0),
                            (X = 0 | Kr[H >> 2]),
                            (ne = 0 | Kr[(e + 88) >> 2]),
                            (V = ((0 | Zr[(ne + 63) >> 0]) << 8) | 0 | Zr[(ne + 64) >> 0]),
                            (ne = 0 | Xr[(ne + 17) >> 0]),
                            (Y = 255 & ne),
                            !((ne << 24) >> 24))
                        )
                            return (on = Te), 1;
                        (x = 0 == (0 | a)),
                            (K = (o + -1) | 0),
                            (W = K << 5),
                            (Z = (a + -1) | 0),
                            (z = t << 1),
                            (j = (e + 92) | 0),
                            (J = (e + 116) | 0),
                            (Q = (e + 164) | 0),
                            (q = (e + 268) | 0),
                            ($ = (e + 140) | 0),
                            (ee = (e + 236) | 0),
                            (re = (e + 212) | 0),
                            (ne = (e + 188) | 0),
                            (B = 0 == ((1 & i) | 0)),
                            (v = 0 == ((1 & _) | 0)),
                            (D = (e + 288) | 0),
                            (p = (e + 284) | 0),
                            (m = (e + 252) | 0),
                            (U = 0),
                            (e = 0),
                            (_ = 0),
                            (i = 0),
                            (n = 0),
                            (u = 1);
                        do {
                            if (!x)
                                for (b = 0 | Kr[(r + (U << 2)) >> 2], F = 0; ; ) {
                                    if (
                                        ((L = 1 & F),
                                        (f = 0 == (0 | L)),
                                        (P = (((L << 6) ^ 64) - 32) | 0),
                                        (L = (((L << 1) ^ 2) - 1) | 0),
                                        (C = f ? o : -1),
                                        (0 | (E = f ? 0 : K)) != (0 | C))
                                    )
                                        for (
                                            h = v | ((0 | F) != (0 | Z)), O = f ? b : (b + W) | 0;
                                            ;

                                        ) {
                                            1 == (0 | u) && (u = 512 | I(j, J)),
                                                (N = 7 & u),
                                                (u >>>= 3),
                                                (T = 0 | Zr[(1539 + N) >> 0]),
                                                (f = 0);
                                            do {
                                                (d = ((0 | I(j, Q)) + _) | 0),
                                                    (M = (d - X) | 0),
                                                    (S = M >> 31),
                                                    (_ = (S & d) | (M & ~S)),
                                                    (0 | Kr[H >> 2]) >>> 0 <= _ >>> 0 &&
                                                        ((Kr[_e >> 2] = 866),
                                                        (Kr[(_e + 4) >> 2] = 910),
                                                        (Kr[(_e + 8) >> 2] = 1497),
                                                        He(te, 812, _e),
                                                        ce(te)),
                                                    (Kr[(k + (f << 2)) >> 2] =
                                                        jr[((0 | Kr[q >> 2]) + (_ << 1)) >> 1]),
                                                    (f = (f + 1) | 0);
                                            } while (f >>> 0 < T >>> 0);
                                            f = 0;
                                            do {
                                                (d = ((0 | I(j, $)) + n) | 0),
                                                    (M = (d - g) | 0),
                                                    (S = M >> 31),
                                                    (n = (S & d) | (M & ~S)),
                                                    (0 | Kr[y >> 2]) >>> 0 <= n >>> 0 &&
                                                        ((Kr[Ee >> 2] = 866),
                                                        (Kr[(Ee + 4) >> 2] = 910),
                                                        (Kr[(Ee + 8) >> 2] = 1497),
                                                        He(te, 812, Ee),
                                                        ce(te)),
                                                    (Kr[(ie + (f << 2)) >> 2] =
                                                        Kr[((0 | Kr[ee >> 2]) + (n << 2)) >> 2]),
                                                    (f = (f + 1) | 0);
                                            } while (f >>> 0 < T >>> 0);
                                            for (S = B | ((0 | E) != (0 | K)), d = 0, M = O; ; ) {
                                                if (((s = h | (0 == (0 | d))), (A = d << 1), S))
                                                    for (c = 0, l = M; ; ) {
                                                        if (
                                                            ((R = ((0 | I(j, re)) + e) | 0),
                                                            (T = (R - V) | 0),
                                                            (e = T >> 31),
                                                            (e = (e & R) | (T & ~e)),
                                                            (T = ((0 | I(j, ne)) + i) | 0),
                                                            (R = (T - G) | 0),
                                                            (i = R >> 31),
                                                            (i = (i & T) | (R & ~i)),
                                                            s &&
                                                                ((f =
                                                                    0 |
                                                                    Zr[
                                                                        (c +
                                                                            A +
                                                                            (1547 + (N << 2))) >>
                                                                            0
                                                                    ]),
                                                                (T = (3 * e) | 0),
                                                                (0 | Kr[D >> 2]) >>> 0 <= T >>> 0 &&
                                                                    ((Kr[fe >> 2] = 866),
                                                                    (Kr[(fe + 4) >> 2] = 910),
                                                                    (Kr[(fe + 8) >> 2] = 1497),
                                                                    He(te, 812, fe),
                                                                    ce(te)),
                                                                (R =
                                                                    ((0 | Kr[p >> 2]) + (T << 1)) |
                                                                    0),
                                                                (Kr[l >> 2] =
                                                                    ((0 | jr[R >> 1]) << 16) |
                                                                    Kr[(k + (f << 2)) >> 2]),
                                                                (Kr[(l + 4) >> 2] =
                                                                    ((0 | jr[(R + 4) >> 1]) << 16) |
                                                                    0 |
                                                                    jr[(R + 2) >> 1]),
                                                                (Kr[(l + 8) >> 2] =
                                                                    Kr[(ie + (f << 2)) >> 2]),
                                                                (0 | Kr[w >> 2]) >>> 0 <= i >>> 0 &&
                                                                    ((Kr[oe >> 2] = 866),
                                                                    (Kr[(oe + 4) >> 2] = 910),
                                                                    (Kr[(oe + 8) >> 2] = 1497),
                                                                    He(te, 812, oe),
                                                                    ce(te)),
                                                                (Kr[(l + 12) >> 2] =
                                                                    Kr[
                                                                        ((0 | Kr[m >> 2]) +
                                                                            (i << 2)) >>
                                                                            2
                                                                    ])),
                                                            2 == (0 | (c = (c + 1) | 0)))
                                                        )
                                                            break;
                                                        l = (l + 16) | 0;
                                                    }
                                                else
                                                    for (
                                                        R = 1 ^ s,
                                                            s = (1547 + (N << 2) + A) | 0,
                                                            c = 0,
                                                            l = M;
                                                        ;

                                                    ) {
                                                        if (
                                                            ((A = ((0 | I(j, re)) + e) | 0),
                                                            (T = (A - V) | 0),
                                                            (e = T >> 31),
                                                            (e = (e & A) | (T & ~e)),
                                                            (T = ((0 | I(j, ne)) + i) | 0),
                                                            (A = (T - G) | 0),
                                                            (i = A >> 31),
                                                            (i = (i & T) | (A & ~i)),
                                                            (0 != (0 | c)) | R ||
                                                                ((f = 0 | Zr[s >> 0]),
                                                                (T = (3 * e) | 0),
                                                                (0 | Kr[D >> 2]) >>> 0 <= T >>> 0 &&
                                                                    ((Kr[ae >> 2] = 866),
                                                                    (Kr[(ae + 4) >> 2] = 910),
                                                                    (Kr[(ae + 8) >> 2] = 1497),
                                                                    He(te, 812, ae),
                                                                    ce(te)),
                                                                (A =
                                                                    ((0 | Kr[p >> 2]) + (T << 1)) |
                                                                    0),
                                                                (Kr[l >> 2] =
                                                                    ((0 | jr[A >> 1]) << 16) |
                                                                    Kr[(k + (f << 2)) >> 2]),
                                                                (Kr[(l + 4) >> 2] =
                                                                    ((0 | jr[(A + 4) >> 1]) << 16) |
                                                                    0 |
                                                                    jr[(A + 2) >> 1]),
                                                                (Kr[(l + 8) >> 2] =
                                                                    Kr[(ie + (f << 2)) >> 2]),
                                                                (0 | Kr[w >> 2]) >>> 0 <= i >>> 0 &&
                                                                    ((Kr[ue >> 2] = 866),
                                                                    (Kr[(ue + 4) >> 2] = 910),
                                                                    (Kr[(ue + 8) >> 2] = 1497),
                                                                    He(te, 812, ue),
                                                                    ce(te)),
                                                                (Kr[(l + 12) >> 2] =
                                                                    Kr[
                                                                        ((0 | Kr[m >> 2]) +
                                                                            (i << 2)) >>
                                                                            2
                                                                    ])),
                                                            2 == (0 | (c = (c + 1) | 0)))
                                                        )
                                                            break;
                                                        l = (l + 16) | 0;
                                                    }
                                                if (2 == (0 | (d = (d + 1) | 0))) break;
                                                M = (M + t) | 0;
                                            }
                                            if ((0 | (E = (L + E) | 0)) == (0 | C)) break;
                                            O = (O + P) | 0;
                                        }
                                    if ((0 | (F = (F + 1) | 0)) == (0 | a)) break;
                                    b = (b + z) | 0;
                                }
                            U = (U + 1) | 0;
                        } while ((0 | U) != (0 | Y));
                        return (on = Te), 1;
                    }
                    function l(e, r) {
                        (e |= 0), (r |= 0);
                        var n = 0,
                            t = 0,
                            i = 0,
                            _ = 0,
                            o = 0,
                            a = 0,
                            u = 0;
                        (u = (e + r) | 0), (n = 0 | Kr[(e + 4) >> 2]);
                        do {
                            if (1 & n) (a = e), (n = r);
                            else {
                                if (((t = 0 | Kr[e >> 2]), !(3 & n))) return;
                                if (
                                    ((_ = (e + (0 - t)) | 0),
                                    (o = (t + r) | 0),
                                    (0 | _) == (0 | Kr[1149]))
                                ) {
                                    if (
                                        ((e = (u + 4) | 0), 3 != ((3 & (n = 0 | Kr[e >> 2])) | 0))
                                    ) {
                                        (a = _), (n = o);
                                        break;
                                    }
                                    return (
                                        (Kr[1146] = o),
                                        (Kr[e >> 2] = -2 & n),
                                        (Kr[(_ + 4) >> 2] = 1 | o),
                                        void (Kr[(_ + o) >> 2] = o)
                                    );
                                }
                                if (((r = t >>> 3), t >>> 0 < 256)) {
                                    if (
                                        ((e = 0 | Kr[(_ + 8) >> 2]),
                                        (0 | (n = 0 | Kr[(_ + 12) >> 2])) == (0 | e))
                                    ) {
                                        (Kr[1144] = Kr[1144] & ~(1 << r)), (a = _), (n = o);
                                        break;
                                    }
                                    (Kr[(e + 12) >> 2] = n),
                                        (Kr[(n + 8) >> 2] = e),
                                        (a = _),
                                        (n = o);
                                    break;
                                }
                                (i = 0 | Kr[(_ + 24) >> 2]), (e = 0 | Kr[(_ + 12) >> 2]);
                                do {
                                    if ((0 | e) == (0 | _)) {
                                        if (
                                            ((r = (_ + 16) | 0),
                                            (n = (r + 4) | 0),
                                            !(e = 0 | Kr[n >> 2]))
                                        ) {
                                            if (!(e = 0 | Kr[r >> 2])) {
                                                e = 0;
                                                break;
                                            }
                                            n = r;
                                        }
                                        for (;;)
                                            if (((r = (e + 20) | 0), 0 | (t = 0 | Kr[r >> 2])))
                                                (e = t), (n = r);
                                            else {
                                                if (((r = (e + 16) | 0), !(t = 0 | Kr[r >> 2])))
                                                    break;
                                                (e = t), (n = r);
                                            }
                                        Kr[n >> 2] = 0;
                                    } else
                                        (a = 0 | Kr[(_ + 8) >> 2]),
                                            (Kr[(a + 12) >> 2] = e),
                                            (Kr[(e + 8) >> 2] = a);
                                } while (0);
                                if (i) {
                                    if (
                                        ((n = 0 | Kr[(_ + 28) >> 2]),
                                        (r = (4880 + (n << 2)) | 0),
                                        (0 | _) == (0 | Kr[r >> 2]))
                                    ) {
                                        if (((Kr[r >> 2] = e), !e)) {
                                            (Kr[1145] = Kr[1145] & ~(1 << n)), (a = _), (n = o);
                                            break;
                                        }
                                    } else if (
                                        ((Kr[
                                            (i +
                                                16 +
                                                ((((0 | Kr[(i + 16) >> 2]) != (0 | _)) & 1) <<
                                                    2)) >>
                                                2
                                        ] = e),
                                        !e)
                                    ) {
                                        (a = _), (n = o);
                                        break;
                                    }
                                    (Kr[(e + 24) >> 2] = i),
                                        (n = (_ + 16) | 0),
                                        (r = 0 | Kr[n >> 2]),
                                        0 | r && ((Kr[(e + 16) >> 2] = r), (Kr[(r + 24) >> 2] = e)),
                                        (n = 0 | Kr[(n + 4) >> 2]),
                                        n
                                            ? ((Kr[(e + 20) >> 2] = n),
                                              (Kr[(n + 24) >> 2] = e),
                                              (a = _),
                                              (n = o))
                                            : ((a = _), (n = o));
                                } else (a = _), (n = o);
                            }
                        } while (0);
                        if (((e = (u + 4) | 0), 2 & (t = 0 | Kr[e >> 2])))
                            (Kr[e >> 2] = -2 & t),
                                (Kr[(a + 4) >> 2] = 1 | n),
                                (Kr[(a + n) >> 2] = n);
                        else {
                            if (((e = 0 | Kr[1149]), (0 | u) == (0 | Kr[1150]))) {
                                if (
                                    ((u = ((0 | Kr[1147]) + n) | 0),
                                    (Kr[1147] = u),
                                    (Kr[1150] = a),
                                    (Kr[(a + 4) >> 2] = 1 | u),
                                    (0 | a) != (0 | e))
                                )
                                    return;
                                return (Kr[1149] = 0), void (Kr[1146] = 0);
                            }
                            if ((0 | u) == (0 | e))
                                return (
                                    (u = ((0 | Kr[1146]) + n) | 0),
                                    (Kr[1146] = u),
                                    (Kr[1149] = a),
                                    (Kr[(a + 4) >> 2] = 1 | u),
                                    void (Kr[(a + u) >> 2] = u)
                                );
                            (_ = ((-8 & t) + n) | 0), (r = t >>> 3);
                            do {
                                if (t >>> 0 < 256) {
                                    if (
                                        ((n = 0 | Kr[(u + 8) >> 2]),
                                        (0 | (e = 0 | Kr[(u + 12) >> 2])) == (0 | n))
                                    ) {
                                        Kr[1144] = Kr[1144] & ~(1 << r);
                                        break;
                                    }
                                    (Kr[(n + 12) >> 2] = e), (Kr[(e + 8) >> 2] = n);
                                    break;
                                }
                                (i = 0 | Kr[(u + 24) >> 2]), (e = 0 | Kr[(u + 12) >> 2]);
                                do {
                                    if ((0 | e) == (0 | u)) {
                                        if (
                                            ((r = (u + 16) | 0),
                                            (n = (r + 4) | 0),
                                            !(e = 0 | Kr[n >> 2]))
                                        ) {
                                            if (!(e = 0 | Kr[r >> 2])) {
                                                r = 0;
                                                break;
                                            }
                                            n = r;
                                        }
                                        for (;;)
                                            if (((r = (e + 20) | 0), 0 | (t = 0 | Kr[r >> 2])))
                                                (e = t), (n = r);
                                            else {
                                                if (((r = (e + 16) | 0), !(t = 0 | Kr[r >> 2])))
                                                    break;
                                                (e = t), (n = r);
                                            }
                                        (Kr[n >> 2] = 0), (r = e);
                                    } else
                                        (r = 0 | Kr[(u + 8) >> 2]),
                                            (Kr[(r + 12) >> 2] = e),
                                            (Kr[(e + 8) >> 2] = r),
                                            (r = e);
                                } while (0);
                                if (0 | i) {
                                    if (
                                        ((e = 0 | Kr[(u + 28) >> 2]),
                                        (n = (4880 + (e << 2)) | 0),
                                        (0 | u) == (0 | Kr[n >> 2]))
                                    ) {
                                        if (((Kr[n >> 2] = r), !r)) {
                                            Kr[1145] = Kr[1145] & ~(1 << e);
                                            break;
                                        }
                                    } else if (
                                        ((Kr[
                                            (i +
                                                16 +
                                                ((((0 | Kr[(i + 16) >> 2]) != (0 | u)) & 1) <<
                                                    2)) >>
                                                2
                                        ] = r),
                                        !r)
                                    )
                                        break;
                                    (Kr[(r + 24) >> 2] = i),
                                        (e = (u + 16) | 0),
                                        (n = 0 | Kr[e >> 2]),
                                        0 | n && ((Kr[(r + 16) >> 2] = n), (Kr[(n + 24) >> 2] = r)),
                                        (e = 0 | Kr[(e + 4) >> 2]),
                                        0 | e && ((Kr[(r + 20) >> 2] = e), (Kr[(e + 24) >> 2] = r));
                                }
                            } while (0);
                            if (
                                ((Kr[(a + 4) >> 2] = 1 | _),
                                (Kr[(a + _) >> 2] = _),
                                (0 | a) == (0 | Kr[1149]))
                            )
                                return void (Kr[1146] = _);
                            n = _;
                        }
                        if (((e = n >>> 3), n >>> 0 < 256))
                            return (
                                (r = (4616 + ((e << 1) << 2)) | 0),
                                (n = 0 | Kr[1144]),
                                (e = 1 << e),
                                n & e
                                    ? ((n = (r + 8) | 0), (e = 0 | Kr[n >> 2]))
                                    : ((Kr[1144] = n | e), (e = r), (n = (r + 8) | 0)),
                                (Kr[n >> 2] = a),
                                (Kr[(e + 12) >> 2] = a),
                                (Kr[(a + 8) >> 2] = e),
                                void (Kr[(a + 12) >> 2] = r)
                            );
                        if (
                            ((e = n >>> 8),
                            e
                                ? n >>> 0 > 16777215
                                    ? (e = 31)
                                    : ((o = (((e + 1048320) | 0) >>> 16) & 8),
                                      (u = e << o),
                                      (_ = (((u + 520192) | 0) >>> 16) & 4),
                                      (u <<= _),
                                      (e = (((u + 245760) | 0) >>> 16) & 2),
                                      (e = (14 - (_ | o | e) + ((u << e) >>> 15)) | 0),
                                      (e = ((n >>> ((e + 7) | 0)) & 1) | (e << 1)))
                                : (e = 0),
                            (i = (4880 + (e << 2)) | 0),
                            (Kr[(a + 28) >> 2] = e),
                            (Kr[(a + 20) >> 2] = 0),
                            (Kr[(a + 16) >> 2] = 0),
                            (r = 0 | Kr[1145]),
                            (t = 1 << e),
                            !(r & t))
                        )
                            return (
                                (Kr[1145] = r | t),
                                (Kr[i >> 2] = a),
                                (Kr[(a + 24) >> 2] = i),
                                (Kr[(a + 12) >> 2] = a),
                                void (Kr[(a + 8) >> 2] = a)
                            );
                        for (
                            r = n << (31 == (0 | e) ? 0 : (25 - (e >>> 1)) | 0), t = 0 | Kr[i >> 2];
                            ;

                        ) {
                            if (((-8 & Kr[(t + 4) >> 2]) | 0) == (0 | n)) {
                                e = 69;
                                break;
                            }
                            if (((i = (t + 16 + ((r >>> 31) << 2)) | 0), !(e = 0 | Kr[i >> 2]))) {
                                e = 68;
                                break;
                            }
                            (r <<= 1), (t = e);
                        }
                        return 68 == (0 | e)
                            ? ((Kr[i >> 2] = a),
                              (Kr[(a + 24) >> 2] = t),
                              (Kr[(a + 12) >> 2] = a),
                              void (Kr[(a + 8) >> 2] = a))
                            : 69 == (0 | e)
                            ? ((o = (t + 8) | 0),
                              (u = 0 | Kr[o >> 2]),
                              (Kr[(u + 12) >> 2] = a),
                              (Kr[o >> 2] = a),
                              (Kr[(a + 8) >> 2] = u),
                              (Kr[(a + 12) >> 2] = t),
                              void (Kr[(a + 24) >> 2] = 0))
                            : void 0;
                    }
                    function s(e) {
                        e |= 0;
                        var r = 0,
                            n = 0,
                            t = 0,
                            i = 0,
                            _ = 0,
                            o = 0,
                            u = 0,
                            E = 0,
                            f = 0,
                            T = 0,
                            c = 0,
                            l = 0,
                            s = 0,
                            A = 0,
                            R = 0,
                            d = 0,
                            M = 0,
                            S = 0,
                            N = 0,
                            O = 0,
                            C = 0,
                            h = 0,
                            L = 0,
                            b = 0,
                            F = 0,
                            U = 0,
                            m = 0,
                            D = 0,
                            p = 0,
                            v = 0,
                            B = 0,
                            k = 0,
                            y = 0,
                            g = 0,
                            w = 0,
                            G = 0,
                            H = 0,
                            X = 0,
                            V = 0,
                            Y = 0,
                            x = 0;
                        if (
                            ((V = on),
                            (on = (on + 2416) | 0),
                            (o = V),
                            (_ = (V + 1904) | 0),
                            (X = (V + 1880) | 0),
                            (w = (V + 980) | 0),
                            (G = (V + 80) | 0),
                            (H = (V + 16) | 0),
                            (n = 0 | Kr[(e + 88) >> 2]),
                            (y = ((0 | Zr[(n + 63) >> 0]) << 8) | 0 | Zr[(n + 64) >> 0]),
                            (g = (e + 92) | 0),
                            (r =
                                ((0 | Kr[(e + 4) >> 2]) +
                                    (((0 | Zr[(n + 58) >> 0]) << 8) |
                                        ((0 | Zr[(n + 57) >> 0]) << 16) |
                                        0 |
                                        Zr[(n + 59) >> 0])) |
                                0),
                            !(n =
                                ((0 | Zr[(n + 61) >> 0]) << 8) |
                                ((0 | Zr[(n + 60) >> 0]) << 16) |
                                0 |
                                Zr[(n + 62) >> 0]))
                        )
                            return (X = 0), (on = V), 0 | X;
                        if (
                            ((Kr[g >> 2] = r),
                            (Kr[(e + 96) >> 2] = r),
                            (Kr[(e + 104) >> 2] = n),
                            (Kr[(e + 100) >> 2] = r + n),
                            (Kr[(e + 108) >> 2] = 0),
                            (Kr[(e + 112) >> 2] = 0),
                            (Kr[(X + 20) >> 2] = 0),
                            (Kr[X >> 2] = 0),
                            (Kr[(X + 4) >> 2] = 0),
                            (Kr[(X + 8) >> 2] = 0),
                            (Kr[(X + 12) >> 2] = 0),
                            (Xr[(X + 16) >> 0] = 0),
                            0 | a(g, X))
                        ) {
                            for (r = 0, n = -7, t = -7; ; ) {
                                if (
                                    ((Kr[(w + (r << 2)) >> 2] = t),
                                    (Kr[(G + (r << 2)) >> 2] = n),
                                    (i = (0 | t) > 6),
                                    225 == (0 | (r = (r + 1) | 0)))
                                )
                                    break;
                                (n = ((1 & i) + n) | 0), (t = i ? -7 : (t + 1) | 0);
                            }
                            (r = H), (n = (r + 64) | 0);
                            do {
                                (Kr[r >> 2] = 0), (r = (r + 4) | 0);
                            } while ((0 | r) < (0 | n));
                            (i = (e + 284) | 0),
                                (n = (3 * y) | 0),
                                (t = (e + 288) | 0),
                                (r = 0 | Kr[t >> 2]);
                            e: do {
                                if ((0 | r) == (0 | n)) u = 13;
                                else {
                                    if (r >>> 0 <= n >>> 0) {
                                        do {
                                            if ((0 | Kr[(e + 292) >> 2]) >>> 0 < n >>> 0) {
                                                if (0 | P(i, n, ((r + 1) | 0) == (0 | n), 2, 0)) {
                                                    r = 0 | Kr[t >> 2];
                                                    break;
                                                }
                                                (Xr[(e + 296) >> 0] = 1), (r = 0);
                                                break e;
                                            }
                                        } while (0);
                                        ee(
                                            ((0 | Kr[i >> 2]) + (r << 1)) | 0,
                                            0,
                                            ((n - r) << 1) | 0
                                        );
                                    }
                                    (Kr[t >> 2] = n), (u = 13);
                                }
                            } while (0);
                            do {
                                if (13 == (0 | u)) {
                                    if (!y) {
                                        (Kr[o >> 2] = 866),
                                            (Kr[(o + 4) >> 2] = 910),
                                            (Kr[(o + 8) >> 2] = 1497),
                                            He(_, 812, o),
                                            ce(_),
                                            (r = 1);
                                        break;
                                    }
                                    for (
                                        S = (H + 4) | 0,
                                            N = (H + 8) | 0,
                                            O = (H + 12) | 0,
                                            C = (H + 16) | 0,
                                            h = (H + 20) | 0,
                                            L = (H + 24) | 0,
                                            b = (H + 28) | 0,
                                            F = (H + 32) | 0,
                                            U = (H + 36) | 0,
                                            m = (H + 40) | 0,
                                            D = (H + 44) | 0,
                                            p = (H + 48) | 0,
                                            v = (H + 52) | 0,
                                            B = (H + 56) | 0,
                                            k = (H + 60) | 0,
                                            M = 0,
                                            r = 0 | Kr[i >> 2],
                                            n = 0 | Kr[H >> 2],
                                            t = 0 | Kr[S >> 2],
                                            i = 0 | Kr[N >> 2],
                                            e = 0 | Kr[O >> 2],
                                            _ = 0 | Kr[C >> 2],
                                            o = 0 | Kr[h >> 2],
                                            u = 0 | Kr[L >> 2],
                                            E = 0 | Kr[b >> 2],
                                            f = 0 | Kr[F >> 2],
                                            T = 0 | Kr[U >> 2],
                                            c = 0 | Kr[m >> 2],
                                            l = 0 | Kr[D >> 2],
                                            s = 0,
                                            A = 0,
                                            R = 0,
                                            d = 0;
                                        ;

                                    ) {
                                        if (
                                            ((x = 0 | I(g, X)),
                                            (n = (n + (0 | Kr[(w + (x << 2)) >> 2])) & 7),
                                            (t = (t + (0 | Kr[(G + (x << 2)) >> 2])) & 7),
                                            (x = 0 | I(g, X)),
                                            (i = (i + (0 | Kr[(w + (x << 2)) >> 2])) & 7),
                                            (e = (e + (0 | Kr[(G + (x << 2)) >> 2])) & 7),
                                            (x = 0 | I(g, X)),
                                            (_ = (_ + (0 | Kr[(w + (x << 2)) >> 2])) & 7),
                                            (o = (o + (0 | Kr[(G + (x << 2)) >> 2])) & 7),
                                            (x = 0 | I(g, X)),
                                            (u = (u + (0 | Kr[(w + (x << 2)) >> 2])) & 7),
                                            (E = (E + (0 | Kr[(G + (x << 2)) >> 2])) & 7),
                                            (x = 0 | I(g, X)),
                                            (f = (f + (0 | Kr[(w + (x << 2)) >> 2])) & 7),
                                            (T = (T + (0 | Kr[(G + (x << 2)) >> 2])) & 7),
                                            (x = 0 | I(g, X)),
                                            (c = (c + (0 | Kr[(w + (x << 2)) >> 2])) & 7),
                                            (l = (l + (0 | Kr[(G + (x << 2)) >> 2])) & 7),
                                            (x = 0 | I(g, X)),
                                            (s = (s + (0 | Kr[(w + (x << 2)) >> 2])) & 7),
                                            (A = (A + (0 | Kr[(G + (x << 2)) >> 2])) & 7),
                                            (x = 0 | I(g, X)),
                                            (R = (R + (0 | Kr[(w + (x << 2)) >> 2])) & 7),
                                            (d = (d + (0 | Kr[(G + (x << 2)) >> 2])) & 7),
                                            (x = 0 | Zr[(1445 + o) >> 0]),
                                            (Yr[r >> 1] =
                                                ((0 | Zr[(1445 + t) >> 0]) << 3) |
                                                0 |
                                                Zr[(1445 + n) >> 0] |
                                                ((0 | Zr[(1445 + i) >> 0]) << 6) |
                                                ((0 | Zr[(1445 + e) >> 0]) << 9) |
                                                ((0 | Zr[(1445 + _) >> 0]) << 12) |
                                                (x << 15)),
                                            (Y = 0 | Zr[(1445 + c) >> 0]),
                                            (Yr[(r + 2) >> 1] =
                                                ((0 | Zr[(1445 + u) >> 0]) << 2) |
                                                (x >>> 1) |
                                                ((0 | Zr[(1445 + E) >> 0]) << 5) |
                                                ((0 | Zr[(1445 + f) >> 0]) << 8) |
                                                ((0 | Zr[(1445 + T) >> 0]) << 11) |
                                                (Y << 14)),
                                            (Yr[(r + 4) >> 1] =
                                                ((0 | Zr[(1445 + l) >> 0]) << 1) |
                                                (Y >>> 2) |
                                                ((0 | Zr[(1445 + s) >> 0]) << 4) |
                                                ((0 | Zr[(1445 + A) >> 0]) << 7) |
                                                ((0 | Zr[(1445 + R) >> 0]) << 10) |
                                                ((0 | Zr[(1445 + d) >> 0]) << 13)),
                                            (M = (M + 1) | 0) >>> 0 >= y >>> 0)
                                        )
                                            break;
                                        r = (r + 6) | 0;
                                    }
                                    (Kr[H >> 2] = n),
                                        (Kr[S >> 2] = t),
                                        (Kr[N >> 2] = i),
                                        (Kr[O >> 2] = e),
                                        (Kr[C >> 2] = _),
                                        (Kr[h >> 2] = o),
                                        (Kr[L >> 2] = u),
                                        (Kr[b >> 2] = E),
                                        (Kr[F >> 2] = f),
                                        (Kr[U >> 2] = T),
                                        (Kr[m >> 2] = c),
                                        (Kr[D >> 2] = l),
                                        (Kr[p >> 2] = s),
                                        (Kr[v >> 2] = A),
                                        (Kr[B >> 2] = R),
                                        (Kr[k >> 2] = d),
                                        (r = 1);
                                }
                            } while (0);
                        } else r = 0;
                        return z(X), (x = r), (on = V), 0 | x;
                    }
                    function A(e) {
                        e |= 0;
                        var r = 0,
                            n = 0,
                            t = 0,
                            i = 0,
                            _ = 0,
                            o = 0,
                            u = 0,
                            E = 0,
                            f = 0,
                            T = 0,
                            c = 0,
                            l = 0,
                            s = 0,
                            A = 0,
                            R = 0,
                            d = 0,
                            M = 0,
                            S = 0,
                            N = 0,
                            O = 0,
                            C = 0,
                            h = 0,
                            L = 0,
                            b = 0,
                            F = 0,
                            U = 0,
                            m = 0,
                            D = 0,
                            p = 0,
                            v = 0,
                            B = 0,
                            k = 0,
                            y = 0,
                            g = 0,
                            w = 0,
                            G = 0,
                            H = 0,
                            X = 0,
                            V = 0;
                        if (
                            ((F = on),
                            (on = (on + 1008) | 0),
                            (o = F),
                            (_ = (F + 496) | 0),
                            (b = (F + 472) | 0),
                            (C = (F + 276) | 0),
                            (h = (F + 80) | 0),
                            (L = (F + 16) | 0),
                            (n = 0 | Kr[(e + 88) >> 2]),
                            (N = ((0 | Zr[(n + 47) >> 0]) << 8) | 0 | Zr[(n + 48) >> 0]),
                            (O = (e + 92) | 0),
                            (r =
                                ((0 | Kr[(e + 4) >> 2]) +
                                    (((0 | Zr[(n + 42) >> 0]) << 8) |
                                        ((0 | Zr[(n + 41) >> 0]) << 16) |
                                        0 |
                                        Zr[(n + 43) >> 0])) |
                                0),
                            !(n =
                                ((0 | Zr[(n + 45) >> 0]) << 8) |
                                ((0 | Zr[(n + 44) >> 0]) << 16) |
                                0 |
                                Zr[(n + 46) >> 0]))
                        )
                            return (b = 0), (on = F), 0 | b;
                        if (
                            ((Kr[O >> 2] = r),
                            (Kr[(e + 96) >> 2] = r),
                            (Kr[(e + 104) >> 2] = n),
                            (Kr[(e + 100) >> 2] = r + n),
                            (Kr[(e + 108) >> 2] = 0),
                            (Kr[(e + 112) >> 2] = 0),
                            (Kr[(b + 20) >> 2] = 0),
                            (Kr[b >> 2] = 0),
                            (Kr[(b + 4) >> 2] = 0),
                            (Kr[(b + 8) >> 2] = 0),
                            (Kr[(b + 12) >> 2] = 0),
                            (Xr[(b + 16) >> 0] = 0),
                            0 | a(O, b))
                        ) {
                            for (r = 0, n = -3, t = -3; ; ) {
                                if (
                                    ((Kr[(C + (r << 2)) >> 2] = t),
                                    (Kr[(h + (r << 2)) >> 2] = n),
                                    (i = (0 | t) > 2),
                                    49 == (0 | (r = (r + 1) | 0)))
                                )
                                    break;
                                (n = ((1 & i) + n) | 0), (t = i ? -3 : (t + 1) | 0);
                            }
                            (r = L), (n = (r + 64) | 0);
                            do {
                                (Kr[r >> 2] = 0), (r = (r + 4) | 0);
                            } while ((0 | r) < (0 | n));
                            (t = (e + 252) | 0), (n = (e + 256) | 0), (r = 0 | Kr[n >> 2]);
                            e: do {
                                if ((0 | r) == (0 | N)) u = 13;
                                else {
                                    if (r >>> 0 <= N >>> 0) {
                                        do {
                                            if ((0 | Kr[(e + 260) >> 2]) >>> 0 < N >>> 0) {
                                                if (0 | P(t, N, ((r + 1) | 0) == (0 | N), 4, 0)) {
                                                    r = 0 | Kr[n >> 2];
                                                    break;
                                                }
                                                (Xr[(e + 264) >> 0] = 1), (r = 0);
                                                break e;
                                            }
                                        } while (0);
                                        ee(
                                            ((0 | Kr[t >> 2]) + (r << 2)) | 0,
                                            0,
                                            ((N - r) << 2) | 0
                                        );
                                    }
                                    (Kr[n >> 2] = N), (u = 13);
                                }
                            } while (0);
                            do {
                                if (13 == (0 | u)) {
                                    if (!N) {
                                        (Kr[o >> 2] = 866),
                                            (Kr[(o + 4) >> 2] = 910),
                                            (Kr[(o + 8) >> 2] = 1497),
                                            He(_, 812, o),
                                            ce(_),
                                            (r = 1);
                                        break;
                                    }
                                    for (
                                        e = (L + 4) | 0,
                                            _ = (L + 8) | 0,
                                            o = (L + 12) | 0,
                                            u = (L + 16) | 0,
                                            E = (L + 20) | 0,
                                            f = (L + 24) | 0,
                                            T = (L + 28) | 0,
                                            c = (L + 32) | 0,
                                            l = (L + 36) | 0,
                                            s = (L + 40) | 0,
                                            A = (L + 44) | 0,
                                            R = (L + 48) | 0,
                                            d = (L + 52) | 0,
                                            M = (L + 56) | 0,
                                            S = (L + 60) | 0,
                                            i = 0,
                                            r = 0 | Kr[t >> 2],
                                            n = 0 | Kr[e >> 2],
                                            t = 0 | Kr[L >> 2];
                                        ;

                                    ) {
                                        if (
                                            ((X = 0 | I(O, b)),
                                            (t = (t + (0 | Kr[(C + (X << 2)) >> 2])) & 3),
                                            (n = (n + (0 | Kr[(h + (X << 2)) >> 2])) & 3),
                                            (X = 0 | I(O, b)),
                                            (V =
                                                ((0 | Kr[_ >> 2]) + (0 | Kr[(C + (X << 2)) >> 2])) &
                                                3),
                                            (Kr[_ >> 2] = V),
                                            (X =
                                                ((0 | Kr[o >> 2]) + (0 | Kr[(h + (X << 2)) >> 2])) &
                                                3),
                                            (Kr[o >> 2] = X),
                                            (G = 0 | I(O, b)),
                                            (H =
                                                ((0 | Kr[u >> 2]) + (0 | Kr[(C + (G << 2)) >> 2])) &
                                                3),
                                            (Kr[u >> 2] = H),
                                            (G =
                                                ((0 | Kr[E >> 2]) + (0 | Kr[(h + (G << 2)) >> 2])) &
                                                3),
                                            (Kr[E >> 2] = G),
                                            (g = 0 | I(O, b)),
                                            (w =
                                                ((0 | Kr[f >> 2]) + (0 | Kr[(C + (g << 2)) >> 2])) &
                                                3),
                                            (Kr[f >> 2] = w),
                                            (g =
                                                ((0 | Kr[T >> 2]) + (0 | Kr[(h + (g << 2)) >> 2])) &
                                                3),
                                            (Kr[T >> 2] = g),
                                            (k = 0 | I(O, b)),
                                            (y =
                                                ((0 | Kr[c >> 2]) + (0 | Kr[(C + (k << 2)) >> 2])) &
                                                3),
                                            (Kr[c >> 2] = y),
                                            (k =
                                                ((0 | Kr[l >> 2]) + (0 | Kr[(h + (k << 2)) >> 2])) &
                                                3),
                                            (Kr[l >> 2] = k),
                                            (v = 0 | I(O, b)),
                                            (B =
                                                ((0 | Kr[s >> 2]) + (0 | Kr[(C + (v << 2)) >> 2])) &
                                                3),
                                            (Kr[s >> 2] = B),
                                            (v =
                                                ((0 | Kr[A >> 2]) + (0 | Kr[(h + (v << 2)) >> 2])) &
                                                3),
                                            (Kr[A >> 2] = v),
                                            (D = 0 | I(O, b)),
                                            (p =
                                                ((0 | Kr[R >> 2]) + (0 | Kr[(C + (D << 2)) >> 2])) &
                                                3),
                                            (Kr[R >> 2] = p),
                                            (D =
                                                ((0 | Kr[d >> 2]) + (0 | Kr[(h + (D << 2)) >> 2])) &
                                                3),
                                            (Kr[d >> 2] = D),
                                            (U = 0 | I(O, b)),
                                            (m =
                                                ((0 | Kr[M >> 2]) + (0 | Kr[(C + (U << 2)) >> 2])) &
                                                3),
                                            (Kr[M >> 2] = m),
                                            (U =
                                                ((0 | Kr[S >> 2]) + (0 | Kr[(h + (U << 2)) >> 2])) &
                                                3),
                                            (Kr[S >> 2] = U),
                                            (Kr[r >> 2] =
                                                ((0 | Zr[(1441 + n) >> 0]) << 2) |
                                                0 |
                                                Zr[(1441 + t) >> 0] |
                                                ((0 | Zr[(1441 + V) >> 0]) << 4) |
                                                ((0 | Zr[(1441 + X) >> 0]) << 6) |
                                                ((0 | Zr[(1441 + H) >> 0]) << 8) |
                                                ((0 | Zr[(1441 + G) >> 0]) << 10) |
                                                ((0 | Zr[(1441 + w) >> 0]) << 12) |
                                                ((0 | Zr[(1441 + g) >> 0]) << 14) |
                                                ((0 | Zr[(1441 + y) >> 0]) << 16) |
                                                ((0 | Zr[(1441 + k) >> 0]) << 18) |
                                                ((0 | Zr[(1441 + B) >> 0]) << 20) |
                                                ((0 | Zr[(1441 + v) >> 0]) << 22) |
                                                ((0 | Zr[(1441 + p) >> 0]) << 24) |
                                                ((0 | Zr[(1441 + D) >> 0]) << 26) |
                                                ((0 | Zr[(1441 + m) >> 0]) << 28) |
                                                ((0 | Zr[(1441 + U) >> 0]) << 30)),
                                            (i = (i + 1) | 0) >>> 0 >= N >>> 0)
                                        )
                                            break;
                                        r = (r + 4) | 0;
                                    }
                                    (Kr[L >> 2] = t), (Kr[e >> 2] = n), (r = 1);
                                }
                            } while (0);
                        } else r = 0;
                        return z(b), (V = r), (on = F), 0 | V;
                    }
                    function R(e, r, n, t, i, _, o, a) {
                        (e |= 0),
                            (r |= 0),
                            (n |= 0),
                            (t |= 0),
                            (i |= 0),
                            (_ |= 0),
                            (o |= 0),
                            (a |= 0);
                        var u = 0,
                            E = 0,
                            f = 0,
                            T = 0,
                            c = 0,
                            l = 0,
                            s = 0,
                            A = 0,
                            R = 0,
                            d = 0,
                            M = 0,
                            S = 0,
                            N = 0,
                            O = 0,
                            C = 0,
                            h = 0,
                            P = 0,
                            L = 0,
                            b = 0,
                            F = 0,
                            U = 0,
                            m = 0,
                            D = 0,
                            p = 0,
                            v = 0,
                            B = 0,
                            k = 0,
                            y = 0,
                            g = 0,
                            w = 0,
                            G = 0,
                            H = 0,
                            X = 0,
                            V = 0,
                            Y = 0,
                            x = 0,
                            K = 0,
                            W = 0,
                            Z = 0,
                            z = 0,
                            j = 0,
                            J = 0;
                        if (
                            ((J = on),
                            (on = (on + 592) | 0),
                            (Z = (J + 48) | 0),
                            (j = (J + 32) | 0),
                            (z = (J + 16) | 0),
                            (W = J),
                            (x = (J + 80) | 0),
                            (K = (J + 64) | 0),
                            (m = (e + 272) | 0),
                            (D = 0 | Kr[m >> 2]),
                            (Y = 0 | Kr[(e + 88) >> 2]),
                            (p = ((0 | Zr[(Y + 63) >> 0]) << 8) | 0 | Zr[(Y + 64) >> 0]),
                            (Y = 0 | Xr[(Y + 17) >> 0]),
                            (v = 255 & Y),
                            !((Y << 24) >> 24))
                        )
                            return (on = J), 1;
                        (B = 0 == (0 | a)),
                            (k = (o + -1) | 0),
                            (y = k << 4),
                            (g = (a + -1) | 0),
                            (w = t << 1),
                            (G = (e + 92) | 0),
                            (H = (e + 116) | 0),
                            (X = (e + 164) | 0),
                            (V = (e + 268) | 0),
                            (Y = (e + 212) | 0),
                            (U = 0 == ((1 & i) | 0)),
                            (F = 0 == ((1 & _) | 0)),
                            (b = (e + 288) | 0),
                            (L = (e + 284) | 0),
                            (P = 0),
                            (i = 0),
                            (n = 0),
                            (_ = 1);
                        do {
                            if (!B)
                                for (C = 0 | Kr[(r + (P << 2)) >> 2], h = 0; ; ) {
                                    if (
                                        ((O = 1 & h),
                                        (u = 0 == (0 | O)),
                                        (N = (((O << 5) ^ 32) - 16) | 0),
                                        (O = (((O << 1) ^ 2) - 1) | 0),
                                        (M = u ? o : -1),
                                        (0 | (e = u ? 0 : k)) != (0 | M))
                                    )
                                        for (
                                            S = F | ((0 | h) != (0 | g)), d = u ? C : (C + y) | 0;
                                            ;

                                        ) {
                                            1 == (0 | _) && (_ = 512 | I(G, H)),
                                                (R = 7 & _),
                                                (_ >>>= 3),
                                                (E = 0 | Zr[(1539 + R) >> 0]),
                                                (u = 0);
                                            do {
                                                (l = ((0 | I(G, X)) + n) | 0),
                                                    (s = (l - D) | 0),
                                                    (A = s >> 31),
                                                    (n = (A & l) | (s & ~A)),
                                                    (0 | Kr[m >> 2]) >>> 0 <= n >>> 0 &&
                                                        ((Kr[W >> 2] = 866),
                                                        (Kr[(W + 4) >> 2] = 910),
                                                        (Kr[(W + 8) >> 2] = 1497),
                                                        He(x, 812, W),
                                                        ce(x)),
                                                    (Kr[(K + (u << 2)) >> 2] =
                                                        jr[((0 | Kr[V >> 2]) + (n << 1)) >> 1]),
                                                    (u = (u + 1) | 0);
                                            } while (u >>> 0 < E >>> 0);
                                            for (A = U | ((0 | e) != (0 | k)), l = 0, s = d; ; ) {
                                                if (
                                                    ((c = S | (0 == (0 | l))),
                                                    (E = l << 1),
                                                    (u = ((0 | I(G, Y)) + i) | 0),
                                                    (f = (u - p) | 0),
                                                    (T = f >> 31),
                                                    (T = (T & u) | (f & ~T)),
                                                    A
                                                        ? (c &&
                                                              ((i =
                                                                  0 |
                                                                  Zr[(1547 + (R << 2) + E) >> 0]),
                                                              (u = (3 * T) | 0),
                                                              (0 | Kr[b >> 2]) >>> 0 <= u >>> 0 &&
                                                                  ((Kr[z >> 2] = 866),
                                                                  (Kr[(z + 4) >> 2] = 910),
                                                                  (Kr[(z + 8) >> 2] = 1497),
                                                                  He(x, 812, z),
                                                                  ce(x)),
                                                              (f =
                                                                  ((0 | Kr[L >> 2]) + (u << 1)) |
                                                                  0),
                                                              (Kr[s >> 2] =
                                                                  ((0 | jr[f >> 1]) << 16) |
                                                                  Kr[(K + (i << 2)) >> 2]),
                                                              (Kr[(s + 4) >> 2] =
                                                                  ((0 | jr[(f + 4) >> 1]) << 16) |
                                                                  0 |
                                                                  jr[(f + 2) >> 1])),
                                                          (f = (s + 8) | 0),
                                                          (u = ((0 | I(G, Y)) + T) | 0),
                                                          (T = (u - p) | 0),
                                                          (i = T >> 31),
                                                          (i = (i & u) | (T & ~i)),
                                                          c &&
                                                              ((u =
                                                                  0 |
                                                                  Zr[
                                                                      (1547 + (R << 2) + (1 | E)) >>
                                                                          0
                                                                  ]),
                                                              (E = (3 * i) | 0),
                                                              (0 | Kr[b >> 2]) >>> 0 <= E >>> 0 &&
                                                                  ((Kr[Z >> 2] = 866),
                                                                  (Kr[(Z + 4) >> 2] = 910),
                                                                  (Kr[(Z + 8) >> 2] = 1497),
                                                                  He(x, 812, Z),
                                                                  ce(x)),
                                                              (c =
                                                                  ((0 | Kr[L >> 2]) + (E << 1)) |
                                                                  0),
                                                              (Kr[f >> 2] =
                                                                  ((0 | jr[c >> 1]) << 16) |
                                                                  Kr[(K + (u << 2)) >> 2]),
                                                              (Kr[(s + 12) >> 2] =
                                                                  ((0 | jr[(c + 4) >> 1]) << 16) |
                                                                  0 |
                                                                  jr[(c + 2) >> 1])))
                                                        : (c &&
                                                              ((i =
                                                                  0 |
                                                                  Zr[(1547 + (R << 2) + E) >> 0]),
                                                              (u = (3 * T) | 0),
                                                              (0 | Kr[b >> 2]) >>> 0 <= u >>> 0 &&
                                                                  ((Kr[j >> 2] = 866),
                                                                  (Kr[(j + 4) >> 2] = 910),
                                                                  (Kr[(j + 8) >> 2] = 1497),
                                                                  He(x, 812, j),
                                                                  ce(x)),
                                                              (c =
                                                                  ((0 | Kr[L >> 2]) + (u << 1)) |
                                                                  0),
                                                              (Kr[s >> 2] =
                                                                  ((0 | jr[c >> 1]) << 16) |
                                                                  Kr[(K + (i << 2)) >> 2]),
                                                              (Kr[(s + 4) >> 2] =
                                                                  ((0 | jr[(c + 4) >> 1]) << 16) |
                                                                  0 |
                                                                  jr[(c + 2) >> 1])),
                                                          (T = ((0 | I(G, Y)) + T) | 0),
                                                          (c = (T - p) | 0),
                                                          (i = c >> 31),
                                                          (i = (i & T) | (c & ~i))),
                                                    2 == (0 | (l = (l + 1) | 0)))
                                                )
                                                    break;
                                                s = (s + t) | 0;
                                            }
                                            if ((0 | (e = (O + e) | 0)) == (0 | M)) break;
                                            d = (d + N) | 0;
                                        }
                                    if ((0 | (h = (h + 1) | 0)) == (0 | a)) break;
                                    C = (C + w) | 0;
                                }
                            P = (P + 1) | 0;
                        } while ((0 | P) != (0 | v));
                        return (on = J), 1;
                    }
                    function d(e, r, n, t, i) {
                        (e |= 0), (r |= 0), (n |= 0), (t |= 0), (i |= 0);
                        var _ = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            E = 0,
                            f = 0,
                            T = 0,
                            c = 0,
                            l = 0,
                            s = 0;
                        if (((f = e), (u = r), (E = u), (o = n), (c = t), (a = c), !E))
                            return (
                                (_ = 0 != (0 | i)),
                                a
                                    ? _
                                        ? ((Kr[i >> 2] = 0 | e),
                                          (Kr[(i + 4) >> 2] = 0 & r),
                                          (c = 0),
                                          (i = 0),
                                          0 | ((Tn = c), i))
                                        : ((c = 0), (i = 0), 0 | ((Tn = c), i))
                                    : (_ &&
                                          ((Kr[i >> 2] = (f >>> 0) % (o >>> 0)),
                                          (Kr[(i + 4) >> 2] = 0)),
                                      (c = 0),
                                      (i = ((f >>> 0) / (o >>> 0)) >>> 0),
                                      0 | ((Tn = c), i))
                            );
                        _ = 0 == (0 | a);
                        do {
                            if (o) {
                                if (!_) {
                                    if ((_ = ((0 | ln(0 | a)) - (0 | ln(0 | E))) | 0) >>> 0 <= 31) {
                                        (T = (_ + 1) | 0),
                                            (a = (31 - _) | 0),
                                            (r = (_ - 31) >> 31),
                                            (o = T),
                                            (e = ((f >>> (T >>> 0)) & r) | (E << a)),
                                            (r &= E >>> (T >>> 0)),
                                            (_ = 0),
                                            (a = f << a);
                                        break;
                                    }
                                    return i
                                        ? ((Kr[i >> 2] = 0 | e),
                                          (Kr[(i + 4) >> 2] = u | (0 & r)),
                                          (c = 0),
                                          (i = 0),
                                          0 | ((Tn = c), i))
                                        : ((c = 0), (i = 0), 0 | ((Tn = c), i));
                                }
                                if (((_ = (o - 1) | 0) & o) | 0) {
                                    (a = (33 + (0 | ln(0 | o)) - (0 | ln(0 | E))) | 0),
                                        (s = (64 - a) | 0),
                                        (T = (32 - a) | 0),
                                        (u = T >> 31),
                                        (l = (a - 32) | 0),
                                        (r = l >> 31),
                                        (o = a),
                                        (e =
                                            (((T - 1) >> 31) & (E >>> (l >>> 0))) |
                                            (((E << T) | (f >>> (a >>> 0))) & r)),
                                        (r &= E >>> (a >>> 0)),
                                        (_ = (f << s) & u),
                                        (a =
                                            (((E << s) | (f >>> (l >>> 0))) & u) |
                                            ((f << T) & ((a - 33) >> 31)));
                                    break;
                                }
                                return (
                                    0 | i && ((Kr[i >> 2] = _ & f), (Kr[(i + 4) >> 2] = 0)),
                                    1 == (0 | o)
                                        ? ((l = u | (0 & r)), (s = 0 | e), 0 | ((Tn = l), s))
                                        : ((s = 0 | be(0 | o)),
                                          (l = (E >>> (s >>> 0)) | 0),
                                          (s = (E << (32 - s)) | (f >>> (s >>> 0)) | 0),
                                          0 | ((Tn = l), s))
                                );
                            }
                            if (_)
                                return (
                                    0 | i &&
                                        ((Kr[i >> 2] = (E >>> 0) % (o >>> 0)),
                                        (Kr[(i + 4) >> 2] = 0)),
                                    (l = 0),
                                    (s = ((E >>> 0) / (o >>> 0)) >>> 0),
                                    0 | ((Tn = l), s)
                                );
                            if (!f)
                                return (
                                    0 | i &&
                                        ((Kr[i >> 2] = 0),
                                        (Kr[(i + 4) >> 2] = (E >>> 0) % (a >>> 0))),
                                    (l = 0),
                                    (s = ((E >>> 0) / (a >>> 0)) >>> 0),
                                    0 | ((Tn = l), s)
                                );
                            if (!((_ = (a - 1) | 0) & a))
                                return (
                                    0 | i &&
                                        ((Kr[i >> 2] = 0 | e),
                                        (Kr[(i + 4) >> 2] = (_ & E) | (0 & r))),
                                    (l = 0),
                                    (s = E >>> ((0 | be(0 | a)) >>> 0)),
                                    0 | ((Tn = l), s)
                                );
                            if ((_ = ((0 | ln(0 | a)) - (0 | ln(0 | E))) | 0) >>> 0 <= 30) {
                                (r = (_ + 1) | 0),
                                    (a = (31 - _) | 0),
                                    (o = r),
                                    (e = (E << a) | (f >>> (r >>> 0))),
                                    (r = E >>> (r >>> 0)),
                                    (_ = 0),
                                    (a = f << a);
                                break;
                            }
                            return i
                                ? ((Kr[i >> 2] = 0 | e),
                                  (Kr[(i + 4) >> 2] = u | (0 & r)),
                                  (l = 0),
                                  (s = 0),
                                  0 | ((Tn = l), s))
                                : ((l = 0), (s = 0), 0 | ((Tn = l), s));
                        } while (0);
                        if (o) {
                            (T = 0 | n),
                                (f = c | (0 & t)),
                                (E = 0 | Qe(0 | T, 0 | f, -1, -1)),
                                (n = Tn),
                                (u = a),
                                (a = 0);
                            do {
                                (t = u),
                                    (u = (_ >>> 31) | (u << 1)),
                                    (_ = a | (_ << 1)),
                                    (t = (e << 1) | (t >>> 31) | 0),
                                    (c = (e >>> 31) | (r << 1) | 0),
                                    Ze(0 | E, 0 | n, 0 | t, 0 | c),
                                    (s = Tn),
                                    (l = (s >> 31) | (((0 | s) < 0 ? -1 : 0) << 1)),
                                    (a = 1 & l),
                                    (e =
                                        0 |
                                        Ze(
                                            0 | t,
                                            0 | c,
                                            (l & T) | 0,
                                            (((((0 | s) < 0 ? -1 : 0) >> 31) |
                                                (((0 | s) < 0 ? -1 : 0) << 1)) &
                                                f) |
                                                0
                                        )),
                                    (r = Tn),
                                    (o = (o - 1) | 0);
                            } while (0 != (0 | o));
                            (E = u), (u = 0);
                        } else (E = a), (u = 0), (a = 0);
                        return (
                            (o = 0),
                            0 | i && ((Kr[i >> 2] = e), (Kr[(i + 4) >> 2] = r)),
                            (l =
                                ((0 | _) >>> 31) |
                                ((E | o) << 1) |
                                (0 & ((o << 1) | (_ >>> 31))) |
                                u),
                            (s = (-2 & ((_ << 1) | 0)) | a),
                            0 | ((Tn = l), s)
                        );
                    }
                    function M(e, r) {
                        (e |= 0), (r |= 0);
                        var n = 0,
                            t = 0,
                            i = 0,
                            _ = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            E = 0,
                            f = 0,
                            T = 0;
                        if (
                            ((T = (e + 4) | 0),
                            (f = 0 | Kr[T >> 2]),
                            (n = -8 & f),
                            (a = (e + n) | 0),
                            !(3 & f))
                        )
                            return r >>> 0 < 256
                                ? 0 | (e = 0)
                                : (n >>> 0 >= ((r + 4) | 0) >>> 0
                                    ? ((n - r) | 0) >>> 0 <= (Kr[1264] << 1) >>> 0
                                    : 0)
                                ? 0 | e
                                : 0 | (e = 0);
                        if (n >>> 0 >= r >>> 0)
                            return (n = (n - r) | 0) >>> 0 <= 15
                                ? 0 | e
                                : ((E = (e + r) | 0),
                                  (Kr[T >> 2] = (1 & f) | r | 2),
                                  (Kr[(E + 4) >> 2] = 3 | n),
                                  (T = (E + n + 4) | 0),
                                  (Kr[T >> 2] = 1 | Kr[T >> 2]),
                                  l(E, n),
                                  0 | e);
                        if ((0 | a) == (0 | Kr[1150]))
                            return (
                                (E = ((0 | Kr[1147]) + n) | 0),
                                (n = (E - r) | 0),
                                (t = (e + r) | 0),
                                E >>> 0 <= r >>> 0
                                    ? 0 | (e = 0)
                                    : ((Kr[T >> 2] = (1 & f) | r | 2),
                                      (Kr[(t + 4) >> 2] = 1 | n),
                                      (Kr[1150] = t),
                                      (Kr[1147] = n),
                                      0 | e)
                            );
                        if ((0 | a) == (0 | Kr[1149]))
                            return (i = ((0 | Kr[1146]) + n) | 0) >>> 0 < r >>> 0
                                ? 0 | (e = 0)
                                : ((n = (i - r) | 0),
                                  (t = 1 & f),
                                  n >>> 0 > 15
                                      ? ((f = (e + r) | 0),
                                        (E = (f + n) | 0),
                                        (Kr[T >> 2] = t | r | 2),
                                        (Kr[(f + 4) >> 2] = 1 | n),
                                        (Kr[E >> 2] = n),
                                        (t = (E + 4) | 0),
                                        (Kr[t >> 2] = -2 & Kr[t >> 2]),
                                        (t = f))
                                      : ((Kr[T >> 2] = t | i | 2),
                                        (t = (e + i + 4) | 0),
                                        (Kr[t >> 2] = 1 | Kr[t >> 2]),
                                        (t = 0),
                                        (n = 0)),
                                  (Kr[1146] = n),
                                  (Kr[1149] = t),
                                  0 | e);
                        if ((2 & (t = 0 | Kr[(a + 4) >> 2])) | 0) return 0 | (e = 0);
                        if ((u = ((-8 & t) + n) | 0) >>> 0 < r >>> 0) return 0 | (e = 0);
                        (E = (u - r) | 0), (i = t >>> 3);
                        do {
                            if (t >>> 0 < 256) {
                                if (
                                    ((t = 0 | Kr[(a + 8) >> 2]),
                                    (0 | (n = 0 | Kr[(a + 12) >> 2])) == (0 | t))
                                ) {
                                    Kr[1144] = Kr[1144] & ~(1 << i);
                                    break;
                                }
                                (Kr[(t + 12) >> 2] = n), (Kr[(n + 8) >> 2] = t);
                                break;
                            }
                            (o = 0 | Kr[(a + 24) >> 2]), (n = 0 | Kr[(a + 12) >> 2]);
                            do {
                                if ((0 | n) == (0 | a)) {
                                    if (
                                        ((i = (a + 16) | 0),
                                        (t = (i + 4) | 0),
                                        (n = 0 | Kr[t >> 2]))
                                    )
                                        _ = t;
                                    else {
                                        if (!(n = 0 | Kr[i >> 2])) {
                                            i = 0;
                                            break;
                                        }
                                        _ = i;
                                    }
                                    for (;;)
                                        if (((i = (n + 20) | 0), 0 | (t = 0 | Kr[i >> 2])))
                                            (n = t), (_ = i);
                                        else {
                                            if (((t = (n + 16) | 0), !(i = 0 | Kr[t >> 2]))) break;
                                            (n = i), (_ = t);
                                        }
                                    (Kr[_ >> 2] = 0), (i = n);
                                } else
                                    (i = 0 | Kr[(a + 8) >> 2]),
                                        (Kr[(i + 12) >> 2] = n),
                                        (Kr[(n + 8) >> 2] = i),
                                        (i = n);
                            } while (0);
                            if (0 | o) {
                                if (
                                    ((n = 0 | Kr[(a + 28) >> 2]),
                                    (t = (4880 + (n << 2)) | 0),
                                    (0 | a) == (0 | Kr[t >> 2]))
                                ) {
                                    if (((Kr[t >> 2] = i), !i)) {
                                        Kr[1145] = Kr[1145] & ~(1 << n);
                                        break;
                                    }
                                } else if (
                                    ((Kr[
                                        (o +
                                            16 +
                                            ((((0 | Kr[(o + 16) >> 2]) != (0 | a)) & 1) << 2)) >>
                                            2
                                    ] = i),
                                    !i)
                                )
                                    break;
                                (Kr[(i + 24) >> 2] = o),
                                    (n = (a + 16) | 0),
                                    (t = 0 | Kr[n >> 2]),
                                    0 | t && ((Kr[(i + 16) >> 2] = t), (Kr[(t + 24) >> 2] = i)),
                                    (n = 0 | Kr[(n + 4) >> 2]),
                                    0 | n && ((Kr[(i + 20) >> 2] = n), (Kr[(n + 24) >> 2] = i));
                            }
                        } while (0);
                        return (
                            (n = 1 & f),
                            E >>> 0 < 16
                                ? ((Kr[T >> 2] = u | n | 2),
                                  (T = (e + u + 4) | 0),
                                  (Kr[T >> 2] = 1 | Kr[T >> 2]),
                                  0 | e)
                                : ((f = (e + r) | 0),
                                  (Kr[T >> 2] = n | r | 2),
                                  (Kr[(f + 4) >> 2] = 3 | E),
                                  (T = (f + E + 4) | 0),
                                  (Kr[T >> 2] = 1 | Kr[T >> 2]),
                                  l(f, E),
                                  0 | e)
                        );
                    }
                    function S(e, r, n, t, i, _) {
                        (e |= 0), (r |= 0), (n |= 0), (t |= 0), (i |= 0), (_ |= 0);
                        var o = 0,
                            a = 0,
                            u = 0,
                            E = 0,
                            f = 0,
                            T = 0,
                            c = 0,
                            l = 0,
                            s = 0;
                        switch (
                            ((s = on),
                            (on = (on + 592) | 0),
                            (l = (s + 56) | 0),
                            (u = (s + 40) | 0),
                            (T = (s + 72) | 0),
                            (f = s),
                            (c = (s + 68) | 0),
                            (Kr[f >> 2] = 40),
                            G(e, r, f),
                            (o = (0 | Kr[(f + 4) >> 2]) >>> i),
                            (a = (0 | Kr[(f + 8) >> 2]) >>> i),
                            (f = (f + 32) | 0),
                            (t = 0 | Kr[(f + 4) >> 2]),
                            0 | Kr[f >> 2])
                        ) {
                            case 0:
                                t ? (E = 14) : (f = 8);
                                break;
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                                E = t ? 14 : 13;
                                break;
                            case 9:
                            case 10:
                                t ? (E = 14) : (f = 8);
                                break;
                            default:
                                E = 14;
                        }
                        13 == (0 | E)
                            ? (f = 16)
                            : 14 == (0 | E) &&
                              ((Kr[u >> 2] = 866),
                              (Kr[(u + 4) >> 2] = 2672),
                              (Kr[(u + 8) >> 2] = 1251),
                              He(T, 812, u),
                              ce(T),
                              (f = 0)),
                            (Kr[c >> 2] = n),
                            (E = 0 | L(e, r)),
                            (r = (_ + i) | 0);
                        do {
                            if (r >>> 0 > i >>> 0) {
                                if (!E) {
                                    for (t = n; ; ) {
                                        if (
                                            ((t =
                                                (t +
                                                    (0 |
                                                        cn(
                                                            0 | cn(((o + 3) | 0) >>> 2, f),
                                                            ((a + 3) | 0) >>> 2
                                                        ))) |
                                                0),
                                            (0 | (i = (i + 1) | 0)) == (0 | r))
                                        )
                                            break;
                                        (a >>>= 1), (o >>>= 1);
                                    }
                                    Kr[c >> 2] = t;
                                    break;
                                }
                                for (e = a, t = n; ; ) {
                                    if (
                                        ((a = 0 | cn(((o + 3) | 0) >>> 2, f)),
                                        (u = 0 | cn(a, ((e + 3) | 0) >>> 2)),
                                        ((i >>> 0 > 15) | (u >>> 0 < 8)
                                            ? 0
                                            : 519686845 == (0 | Kr[E >> 2])) &&
                                            (V(E, c, u, a, i), (t = 0 | Kr[c >> 2])),
                                        (t = (t + u) | 0),
                                        (Kr[c >> 2] = t),
                                        (0 | (i = (i + 1) | 0)) == (0 | r))
                                    )
                                        break;
                                    (e >>>= 1), (o >>>= 1);
                                }
                            }
                        } while (0);
                        return E
                            ? 519686845 != (0 | Kr[E >> 2])
                                ? void (on = s)
                                : (O(E),
                                  7 & E
                                      ? ((Kr[l >> 2] = 866),
                                        (Kr[(l + 4) >> 2] = 2506),
                                        (Kr[(l + 8) >> 2] = 1232),
                                        He(T, 812, l),
                                        ce(T),
                                        void (on = s))
                                      : (_e(E, 0, 0, 1, 0), void (on = s)))
                            : void (on = s);
                    }
                    function N(e) {
                        e |= 0;
                        var r = 0,
                            n = 0,
                            t = 0,
                            i = 0,
                            _ = 0,
                            o = 0,
                            u = 0,
                            E = 0,
                            f = 0,
                            T = 0,
                            c = 0,
                            l = 0,
                            s = 0;
                        if (
                            ((s = on),
                            (on = (on + 576) | 0),
                            (o = s),
                            (i = (s + 64) | 0),
                            (l = (s + 16) | 0),
                            (t = (e + 88) | 0),
                            (r = 0 | Kr[t >> 2]),
                            (c = ((0 | Zr[(r + 39) >> 0]) << 8) | 0 | Zr[(r + 40) >> 0]),
                            (f = (e + 236) | 0),
                            (_ = (e + 240) | 0),
                            (0 | (n = 0 | Kr[_ >> 2])) != (0 | c))
                        ) {
                            if (n >>> 0 <= c >>> 0) {
                                do {
                                    if ((0 | Kr[(e + 244) >> 2]) >>> 0 < c >>> 0) {
                                        if (0 | P(f, c, ((n + 1) | 0) == (0 | c), 4, 0)) {
                                            r = 0 | Kr[_ >> 2];
                                            break;
                                        }
                                        return (Xr[(e + 248) >> 0] = 1), (l = 0), (on = s), 0 | l;
                                    }
                                    r = n;
                                } while (0);
                                ee(((0 | Kr[f >> 2]) + (r << 2)) | 0, 0, ((c - r) << 2) | 0),
                                    (r = 0 | Kr[t >> 2]);
                            }
                            Kr[_ >> 2] = c;
                        }
                        if (
                            ((T = (e + 92) | 0),
                            (n =
                                ((0 | Kr[(e + 4) >> 2]) +
                                    (((0 | Zr[(r + 34) >> 0]) << 8) |
                                        ((0 | Zr[(r + 33) >> 0]) << 16) |
                                        0 |
                                        Zr[(r + 35) >> 0])) |
                                0),
                            !(r =
                                ((0 | Zr[(r + 37) >> 0]) << 8) |
                                ((0 | Zr[(r + 36) >> 0]) << 16) |
                                0 |
                                Zr[(r + 38) >> 0]))
                        )
                            return (l = 0), (on = s), 0 | l;
                        if (
                            ((Kr[T >> 2] = n),
                            (Kr[(e + 96) >> 2] = n),
                            (Kr[(e + 104) >> 2] = r),
                            (Kr[(e + 100) >> 2] = n + r),
                            (Kr[(e + 108) >> 2] = 0),
                            (Kr[(e + 112) >> 2] = 0),
                            (u = (l + 20) | 0),
                            (Kr[l >> 2] = 0),
                            (Kr[(l + 4) >> 2] = 0),
                            (Kr[(l + 8) >> 2] = 0),
                            (Kr[(l + 12) >> 2] = 0),
                            (Xr[(l + 16) >> 0] = 0),
                            (E = (l + 24) | 0),
                            (Kr[(l + 44) >> 2] = 0),
                            (Kr[u >> 2] = 0),
                            (Kr[(u + 4) >> 2] = 0),
                            (Kr[(u + 8) >> 2] = 0),
                            (Kr[(u + 12) >> 2] = 0),
                            (Kr[(u + 16) >> 2] = 0),
                            (Xr[(u + 20) >> 0] = 0),
                            0 | a(T, l) ? 0 | a(T, E) : 0)
                        )
                            if (
                                (0 | Kr[_ >> 2] ||
                                    ((Kr[o >> 2] = 866),
                                    (Kr[(o + 4) >> 2] = 910),
                                    (Kr[(o + 8) >> 2] = 1497),
                                    He(i, 812, o),
                                    ce(i)),
                                c)
                            )
                                for (
                                    o = 0,
                                        u = 0,
                                        n = 0 | Kr[f >> 2],
                                        t = 0,
                                        e = 0,
                                        r = 0,
                                        i = 0,
                                        _ = 0;
                                    ;

                                ) {
                                    if (
                                        ((o = ((0 | I(T, l)) + o) & 31),
                                        (_ = ((0 | I(T, E)) + _) & 63),
                                        (i = ((0 | I(T, l)) + i) & 31),
                                        (r = ((0 | I(T, l)) + r) | 0),
                                        (e = ((0 | I(T, E)) + e) & 63),
                                        (t = ((0 | I(T, l)) + t) & 31),
                                        (Kr[n >> 2] =
                                            (_ << 5) |
                                            (o << 11) |
                                            i |
                                            (r << 27) |
                                            (e << 21) |
                                            (t << 16)),
                                        (u = (u + 1) | 0) >>> 0 >= c >>> 0)
                                    ) {
                                        r = 1;
                                        break;
                                    }
                                    (n = (n + 4) | 0), (r &= 31);
                                }
                            else r = 1;
                        else r = 0;
                        return z((l + 24) | 0), z(l), (l = r), (on = s), 0 | l;
                    }
                    function I(e, r) {
                        (e |= 0), (r |= 0);
                        var n = 0,
                            t = 0,
                            i = 0,
                            _ = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            E = 0,
                            f = 0,
                            T = 0,
                            c = 0,
                            l = 0,
                            s = 0,
                            A = 0;
                        (A = on),
                            (on = (on + 576) | 0),
                            (E = (A + 48) | 0),
                            (T = (A + 32) | 0),
                            (f = (A + 16) | 0),
                            (u = A),
                            (l = (A + 64) | 0),
                            (c = 0 | Kr[(r + 20) >> 2]),
                            (s = (e + 20) | 0),
                            (a = 0 | Kr[s >> 2]),
                            (0 | a) < 24
                                ? ((o = (e + 4) | 0),
                                  (n = 0 | Kr[o >> 2]),
                                  (i = 0 | Kr[(e + 8) >> 2]),
                                  (t = n >>> 0 < i >>> 0),
                                  (0 | a) < 16
                                      ? (t
                                            ? ((_ = (0 | Zr[n >> 0]) << 8), (n = (n + 1) | 0))
                                            : (_ = 0),
                                        n >>> 0 < i >>> 0
                                            ? ((i = 0 | Zr[n >> 0]), (n = (n + 1) | 0))
                                            : (i = 0),
                                        (Kr[o >> 2] = n),
                                        (Kr[s >> 2] = a + 16),
                                        (t = 16),
                                        (n = i | _))
                                      : (t ? ((Kr[o >> 2] = n + 1), (n = 0 | Zr[n >> 0])) : (n = 0),
                                        (Kr[s >> 2] = a + 8),
                                        (t = 24)),
                                  (o = (e + 16) | 0),
                                  (i = Kr[o >> 2] | (n << (t - a))),
                                  (Kr[o >> 2] = i))
                                : ((i = (e + 16) | 0), (o = i), (i = 0 | Kr[i >> 2])),
                            (_ = (1 + (i >>> 16)) | 0);
                        do {
                            if (!(_ >>> 0 <= (0 | Kr[(c + 16) >> 2]) >>> 0)) {
                                for (t = 0 | Kr[(c + 20) >> 2]; ; ) {
                                    if (
                                        ((n = (t + -1) | 0),
                                        !(_ >>> 0 > (0 | Kr[(c + 28 + (n << 2)) >> 2]) >>> 0))
                                    )
                                        break;
                                    t = (t + 1) | 0;
                                }
                                if (
                                    (n =
                                        ((i >>> ((32 - t) | 0)) +
                                            (0 | Kr[(c + 96 + (n << 2)) >> 2])) |
                                        0) >>>
                                        0 <
                                    (0 | Kr[r >> 2]) >>> 0
                                ) {
                                    n = 0 | jr[((0 | Kr[(c + 176) >> 2]) + (n << 1)) >> 1];
                                    break;
                                }
                                return (
                                    (Kr[E >> 2] = 866),
                                    (Kr[(E + 4) >> 2] = 3275),
                                    (Kr[(E + 8) >> 2] = 1348),
                                    He(l, 812, E),
                                    ce(l),
                                    (s = 0),
                                    (on = A),
                                    0 | s
                                );
                            }
                            (t =
                                0 |
                                Kr[
                                    ((0 | Kr[(c + 168) >> 2]) +
                                        ((i >>> ((32 - (0 | Kr[(c + 8) >> 2])) | 0)) << 2)) >>
                                        2
                                ]),
                                -1 == (0 | t) &&
                                    ((Kr[u >> 2] = 866),
                                    (Kr[(u + 4) >> 2] = 3253),
                                    (Kr[(u + 8) >> 2] = 1393),
                                    He(l, 812, u),
                                    ce(l)),
                                (n = 65535 & t),
                                (t >>>= 16),
                                (0 | Kr[(r + 8) >> 2]) >>> 0 <= n >>> 0 &&
                                    ((Kr[f >> 2] = 866),
                                    (Kr[(f + 4) >> 2] = 909),
                                    (Kr[(f + 8) >> 2] = 1497),
                                    He(l, 812, f),
                                    ce(l)),
                                (0 | Zr[((0 | Kr[(r + 4) >> 2]) + n) >> 0]) != (0 | t) &&
                                    ((Kr[T >> 2] = 866),
                                    (Kr[(T + 4) >> 2] = 3257),
                                    (Kr[(T + 8) >> 2] = 1410),
                                    He(l, 812, T),
                                    ce(l));
                        } while (0);
                        return (
                            (Kr[o >> 2] = Kr[o >> 2] << t),
                            (Kr[s >> 2] = (0 | Kr[s >> 2]) - t),
                            (s = n),
                            (on = A),
                            0 | s
                        );
                    }
                    function O(e) {
                        e |= 0;
                        var r = 0,
                            n = 0,
                            t = 0,
                            i = 0,
                            _ = 0,
                            o = 0,
                            a = 0,
                            u = 0;
                        if (
                            ((u = on),
                            (on = (on + 576) | 0),
                            (a = (u + 48) | 0),
                            (_ = (u + 32) | 0),
                            (i = (u + 16) | 0),
                            (t = u),
                            (o = (u + 64) | 0),
                            (Kr[e >> 2] = 0),
                            (r = (e + 284) | 0),
                            (n = 0 | Kr[r >> 2]),
                            0 | n &&
                                (7 & n
                                    ? ((Kr[t >> 2] = 866),
                                      (Kr[(t + 4) >> 2] = 2506),
                                      (Kr[(t + 8) >> 2] = 1232),
                                      He(o, 812, t),
                                      ce(o))
                                    : _e(n, 0, 0, 1, 0),
                                (Kr[r >> 2] = 0),
                                (Kr[(e + 288) >> 2] = 0),
                                (Kr[(e + 292) >> 2] = 0)),
                            (Xr[(e + 296) >> 0] = 0),
                            (r = (e + 268) | 0),
                            (n = 0 | Kr[r >> 2]),
                            0 | n &&
                                (7 & n
                                    ? ((Kr[i >> 2] = 866),
                                      (Kr[(i + 4) >> 2] = 2506),
                                      (Kr[(i + 8) >> 2] = 1232),
                                      He(o, 812, i),
                                      ce(o))
                                    : _e(n, 0, 0, 1, 0),
                                (Kr[r >> 2] = 0),
                                (Kr[(e + 272) >> 2] = 0),
                                (Kr[(e + 276) >> 2] = 0)),
                            (Xr[(e + 280) >> 0] = 0),
                            (r = (e + 252) | 0),
                            (n = 0 | Kr[r >> 2]),
                            0 | n &&
                                (7 & n
                                    ? ((Kr[_ >> 2] = 866),
                                      (Kr[(_ + 4) >> 2] = 2506),
                                      (Kr[(_ + 8) >> 2] = 1232),
                                      He(o, 812, _),
                                      ce(o))
                                    : _e(n, 0, 0, 1, 0),
                                (Kr[r >> 2] = 0),
                                (Kr[(e + 256) >> 2] = 0),
                                (Kr[(e + 260) >> 2] = 0)),
                            (Xr[(e + 264) >> 0] = 0),
                            (r = (e + 236) | 0),
                            !(n = 0 | Kr[r >> 2]))
                        )
                            return (
                                (a = (e + 248) | 0),
                                (Xr[a >> 0] = 0),
                                (a = (e + 212) | 0),
                                z(a),
                                (a = (e + 188) | 0),
                                z(a),
                                (a = (e + 164) | 0),
                                z(a),
                                (a = (e + 140) | 0),
                                z(a),
                                (a = (e + 116) | 0),
                                z(a),
                                void (on = u)
                            );
                        7 & n
                            ? ((Kr[a >> 2] = 866),
                              (Kr[(a + 4) >> 2] = 2506),
                              (Kr[(a + 8) >> 2] = 1232),
                              He(o, 812, a),
                              ce(o))
                            : _e(n, 0, 0, 1, 0),
                            (Kr[r >> 2] = 0),
                            (Kr[(e + 240) >> 2] = 0),
                            (Kr[(e + 244) >> 2] = 0),
                            (a = (e + 248) | 0),
                            (Xr[a >> 0] = 0),
                            (a = (e + 212) | 0),
                            z(a),
                            (a = (e + 188) | 0),
                            z(a),
                            (a = (e + 164) | 0),
                            z(a),
                            (a = (e + 140) | 0),
                            z(a),
                            (a = (e + 116) | 0),
                            z(a),
                            (on = u);
                    }
                    function C(e, r, n) {
                        (e |= 0), (r |= 0), (n |= 0);
                        var t = 0,
                            i = 0,
                            _ = 0;
                        e: do {
                            if (r >>> 0 <= 20)
                                switch (0 | r) {
                                    case 9:
                                        (t = (3 + (0 | Kr[n >> 2])) & -4),
                                            (r = 0 | Kr[t >> 2]),
                                            (Kr[n >> 2] = t + 4),
                                            (Kr[e >> 2] = r);
                                        break e;
                                    case 10:
                                        (t = (3 + (0 | Kr[n >> 2])) & -4),
                                            (r = 0 | Kr[t >> 2]),
                                            (Kr[n >> 2] = t + 4),
                                            (t = e),
                                            (Kr[t >> 2] = r),
                                            (Kr[(t + 4) >> 2] = (((0 | r) < 0) << 31) >> 31);
                                        break e;
                                    case 11:
                                        (t = (3 + (0 | Kr[n >> 2])) & -4),
                                            (r = 0 | Kr[t >> 2]),
                                            (Kr[n >> 2] = t + 4),
                                            (t = e),
                                            (Kr[t >> 2] = r),
                                            (Kr[(t + 4) >> 2] = 0);
                                        break e;
                                    case 12:
                                        (t = (7 + (0 | Kr[n >> 2])) & -8),
                                            (r = t),
                                            (i = 0 | Kr[r >> 2]),
                                            (r = 0 | Kr[(r + 4) >> 2]),
                                            (Kr[n >> 2] = t + 8),
                                            (t = e),
                                            (Kr[t >> 2] = i),
                                            (Kr[(t + 4) >> 2] = r);
                                        break e;
                                    case 13:
                                        (i = (3 + (0 | Kr[n >> 2])) & -4),
                                            (t = 0 | Kr[i >> 2]),
                                            (Kr[n >> 2] = i + 4),
                                            (t = ((65535 & t) << 16) >> 16),
                                            (i = e),
                                            (Kr[i >> 2] = t),
                                            (Kr[(i + 4) >> 2] = (((0 | t) < 0) << 31) >> 31);
                                        break e;
                                    case 14:
                                        (i = (3 + (0 | Kr[n >> 2])) & -4),
                                            (t = 0 | Kr[i >> 2]),
                                            (Kr[n >> 2] = i + 4),
                                            (i = e),
                                            (Kr[i >> 2] = 65535 & t),
                                            (Kr[(i + 4) >> 2] = 0);
                                        break e;
                                    case 15:
                                        (i = (3 + (0 | Kr[n >> 2])) & -4),
                                            (t = 0 | Kr[i >> 2]),
                                            (Kr[n >> 2] = i + 4),
                                            (t = ((255 & t) << 24) >> 24),
                                            (i = e),
                                            (Kr[i >> 2] = t),
                                            (Kr[(i + 4) >> 2] = (((0 | t) < 0) << 31) >> 31);
                                        break e;
                                    case 16:
                                        (i = (3 + (0 | Kr[n >> 2])) & -4),
                                            (t = 0 | Kr[i >> 2]),
                                            (Kr[n >> 2] = i + 4),
                                            (i = e),
                                            (Kr[i >> 2] = 255 & t),
                                            (Kr[(i + 4) >> 2] = 0);
                                        break e;
                                    case 17:
                                    case 18:
                                        (i = (7 + (0 | Kr[n >> 2])) & -8),
                                            (_ = +rn[i >> 3]),
                                            (Kr[n >> 2] = i + 8),
                                            (rn[e >> 3] = _);
                                        break e;
                                    default:
                                        break e;
                                }
                        } while (0);
                    }
                    function h(e) {
                        e |= 0;
                        var r = 0,
                            n = 0,
                            t = 0,
                            i = 0,
                            _ = 0,
                            o = 0,
                            u = 0,
                            E = 0,
                            f = 0;
                        if (
                            ((f = on),
                            (on = (on + 560) | 0),
                            (i = f),
                            (t = (f + 40) | 0),
                            (E = (f + 16) | 0),
                            (n = 0 | Kr[(e + 88) >> 2]),
                            (o = ((0 | Zr[(n + 55) >> 0]) << 8) | 0 | Zr[(n + 56) >> 0]),
                            (u = (e + 92) | 0),
                            (r =
                                ((0 | Kr[(e + 4) >> 2]) +
                                    (((0 | Zr[(n + 50) >> 0]) << 8) |
                                        ((0 | Zr[(n + 49) >> 0]) << 16) |
                                        0 |
                                        Zr[(n + 51) >> 0])) |
                                0),
                            !(n =
                                ((0 | Zr[(n + 53) >> 0]) << 8) |
                                ((0 | Zr[(n + 52) >> 0]) << 16) |
                                0 |
                                Zr[(n + 54) >> 0]))
                        )
                            return (E = 0), (on = f), 0 | E;
                        (Kr[u >> 2] = r),
                            (Kr[(e + 96) >> 2] = r),
                            (Kr[(e + 104) >> 2] = n),
                            (Kr[(e + 100) >> 2] = r + n),
                            (Kr[(e + 108) >> 2] = 0),
                            (Kr[(e + 112) >> 2] = 0),
                            (Kr[(E + 20) >> 2] = 0),
                            (Kr[E >> 2] = 0),
                            (Kr[(E + 4) >> 2] = 0),
                            (Kr[(E + 8) >> 2] = 0),
                            (Kr[(E + 12) >> 2] = 0),
                            (Xr[(E + 16) >> 0] = 0);
                        e: do {
                            if (0 | a(u, E)) {
                                if (
                                    ((_ = (e + 268) | 0),
                                    (n = (e + 272) | 0),
                                    (0 | (r = 0 | Kr[n >> 2])) != (0 | o))
                                ) {
                                    if (r >>> 0 <= o >>> 0) {
                                        do {
                                            if ((0 | Kr[(e + 276) >> 2]) >>> 0 < o >>> 0) {
                                                if (0 | P(_, o, ((r + 1) | 0) == (0 | o), 2, 0)) {
                                                    r = 0 | Kr[n >> 2];
                                                    break;
                                                }
                                                (Xr[(e + 280) >> 0] = 1), (r = 0);
                                                break e;
                                            }
                                        } while (0);
                                        ee(
                                            ((0 | Kr[_ >> 2]) + (r << 1)) | 0,
                                            0,
                                            ((o - r) << 1) | 0
                                        );
                                    }
                                    Kr[n >> 2] = o;
                                }
                                if (!o) {
                                    (Kr[i >> 2] = 866),
                                        (Kr[(i + 4) >> 2] = 910),
                                        (Kr[(i + 8) >> 2] = 1497),
                                        He(t, 812, i),
                                        ce(t),
                                        (r = 1);
                                    break;
                                }
                                for (n = 0, e = 0, t = 0, r = 0 | Kr[_ >> 2]; ; ) {
                                    if (
                                        ((_ = 0 | I(u, E)),
                                        (t = (_ + t) & 255),
                                        (e = ((0 | I(u, E)) + e) & 255),
                                        (Yr[r >> 1] = (e << 8) | t),
                                        (n = (n + 1) | 0) >>> 0 >= o >>> 0)
                                    ) {
                                        r = 1;
                                        break;
                                    }
                                    r = (r + 2) | 0;
                                }
                            } else r = 0;
                        } while (0);
                        return z(E), (E = r), (on = f), 0 | E;
                    }
                    function P(e, r, n, t, i) {
                        (e |= 0), (r |= 0), (n |= 0), (t |= 0), (i |= 0);
                        var _ = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            E = 0,
                            f = 0,
                            T = 0,
                            c = 0,
                            l = 0,
                            s = 0;
                        if (
                            ((s = on),
                            (on = (on + 576) | 0),
                            (T = (s + 48) | 0),
                            (u = (s + 32) | 0),
                            (o = (s + 16) | 0),
                            (_ = s),
                            (f = (s + 64) | 0),
                            (c = (s + 60) | 0),
                            (E = (e + 4) | 0),
                            (l = (e + 8) | 0),
                            (0 | Kr[E >> 2]) >>> 0 > (0 | Kr[l >> 2]) >>> 0 &&
                                ((Kr[_ >> 2] = 866),
                                (Kr[(_ + 4) >> 2] = 2123),
                                (Kr[(_ + 8) >> 2] = 845),
                                He(f, 812, _),
                                ce(f)),
                            ((2147418112 / (t >>> 0)) | 0) >>> 0 <= r >>> 0 &&
                                ((Kr[o >> 2] = 866),
                                (Kr[(o + 4) >> 2] = 2124),
                                (Kr[(o + 8) >> 2] = 885),
                                He(f, 812, o),
                                ce(f)),
                            (_ = 0 | Kr[l >> 2]) >>> 0 >= r >>> 0)
                        )
                            return (l = 1), (on = s), 0 | l;
                        if (
                            ((n
                              ? 0 != (((a = (r + -1) | 0) & r) | 0)
                              : 0)
                                ? ((r = (a >>> 16) | a),
                                  (r |= r >>> 8),
                                  (r |= r >>> 4),
                                  (r |= r >>> 2),
                                  (r = (1 + ((r >>> 1) | r)) | 0),
                                  r ? (n = 9) : ((r = 0), (n = 10)))
                                : (n = 9),
                            9 == (0 | n) && r >>> 0 <= _ >>> 0 && (n = 10),
                            10 == (0 | n) &&
                                ((Kr[u >> 2] = 866),
                                (Kr[(u + 4) >> 2] = 2133),
                                (Kr[(u + 8) >> 2] = 933),
                                He(f, 812, u),
                                ce(f)),
                            (a = 0 | cn(r, t)),
                            i)
                        )
                            if ((o = 0 | j(a, c))) {
                                vn[0 & i](o, 0 | Kr[e >> 2], 0 | Kr[E >> 2]), (_ = 0 | Kr[e >> 2]);
                                do {
                                    if (0 | _) {
                                        if (7 & _) {
                                            (Kr[T >> 2] = 866),
                                                (Kr[(T + 4) >> 2] = 2506),
                                                (Kr[(T + 8) >> 2] = 1232),
                                                He(f, 812, T),
                                                ce(f);
                                            break;
                                        }
                                        _e(_, 0, 0, 1, 0);
                                        break;
                                    }
                                } while (0);
                                (Kr[e >> 2] = o), (n = 20);
                            } else r = 0;
                        else
                            (_ = 0 | q(0 | Kr[e >> 2], a, c, 1)),
                                _ ? ((Kr[e >> 2] = _), (n = 20)) : (r = 0);
                        return (
                            20 == (0 | n) &&
                                ((_ = 0 | Kr[c >> 2]),
                                _ >>> 0 > a >>> 0 && (r = ((_ >>> 0) / (t >>> 0)) | 0),
                                (Kr[l >> 2] = r),
                                (r = 1)),
                            (l = r),
                            (on = s),
                            0 | l
                        );
                    }
                    function L(e, r) {
                        (e |= 0), (r |= 0);
                        var n = 0,
                            t = 0,
                            i = 0,
                            _ = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            E = 0,
                            f = 0,
                            T = 0,
                            c = 0,
                            l = 0;
                        if (
                            ((c = on),
                            (on = (on + 528) | 0),
                            (f = c),
                            (a = (c + 16) | 0),
                            (0 == (0 | e)) | (r >>> 0 < 62))
                        )
                            return (l = 0), (on = c), 0 | l;
                        if (!(u = 0 | j(300, 0))) return (l = 0), (on = c), 0 | l;
                        (Kr[u >> 2] = 519686845),
                            (Kr[(u + 4) >> 2] = 0),
                            (Kr[(u + 8) >> 2] = 0),
                            (E = (u + 88) | 0),
                            (n = (u + 136) | 0),
                            (t = (u + 160) | 0),
                            (i = (u + 184) | 0),
                            (_ = (u + 208) | 0),
                            (o = (u + 232) | 0),
                            (T = (u + 252) | 0),
                            (Kr[T >> 2] = 0),
                            (Kr[(T + 4) >> 2] = 0),
                            (Kr[(T + 8) >> 2] = 0),
                            (Xr[(T + 12) >> 0] = 0),
                            (T = (u + 268) | 0),
                            (Kr[T >> 2] = 0),
                            (Kr[(T + 4) >> 2] = 0),
                            (Kr[(T + 8) >> 2] = 0),
                            (Xr[(T + 12) >> 0] = 0),
                            (T = (u + 284) | 0),
                            (Kr[T >> 2] = 0),
                            (Kr[(T + 4) >> 2] = 0),
                            (Kr[(T + 8) >> 2] = 0),
                            (Xr[(T + 12) >> 0] = 0),
                            (T = E),
                            (l = (T + 44) | 0);
                        do {
                            (Kr[T >> 2] = 0), (T = (T + 4) | 0);
                        } while ((0 | T) < (0 | l));
                        return (
                            (Xr[(E + 44) >> 0] = 0),
                            (Kr[n >> 2] = 0),
                            (Kr[(n + 4) >> 2] = 0),
                            (Kr[(n + 8) >> 2] = 0),
                            (Kr[(n + 12) >> 2] = 0),
                            (Kr[(n + 16) >> 2] = 0),
                            (Xr[(n + 20) >> 0] = 0),
                            (Kr[t >> 2] = 0),
                            (Kr[(t + 4) >> 2] = 0),
                            (Kr[(t + 8) >> 2] = 0),
                            (Kr[(t + 12) >> 2] = 0),
                            (Kr[(t + 16) >> 2] = 0),
                            (Xr[(t + 20) >> 0] = 0),
                            (Kr[i >> 2] = 0),
                            (Kr[(i + 4) >> 2] = 0),
                            (Kr[(i + 8) >> 2] = 0),
                            (Kr[(i + 12) >> 2] = 0),
                            (Kr[(i + 16) >> 2] = 0),
                            (Xr[(i + 20) >> 0] = 0),
                            (Kr[_ >> 2] = 0),
                            (Kr[(_ + 4) >> 2] = 0),
                            (Kr[(_ + 8) >> 2] = 0),
                            (Kr[(_ + 12) >> 2] = 0),
                            (Kr[(_ + 16) >> 2] = 0),
                            (Xr[(_ + 20) >> 0] = 0),
                            (Kr[o >> 2] = 0),
                            (Kr[(o + 4) >> 2] = 0),
                            (Kr[(o + 8) >> 2] = 0),
                            (Kr[(o + 12) >> 2] = 0),
                            (Xr[(o + 16) >> 0] = 0),
                            0 | Y(u, e, r)
                                ? ((l = u), (on = c), 0 | l)
                                : (O(u),
                                  7 & u
                                      ? ((Kr[f >> 2] = 866),
                                        (Kr[(f + 4) >> 2] = 2506),
                                        (Kr[(f + 8) >> 2] = 1232),
                                        He(a, 812, f),
                                        ce(a),
                                        (l = 0),
                                        (on = c),
                                        0 | l)
                                      : (_e(u, 0, 0, 1, 0), (l = 0), (on = c), 0 | l))
                        );
                    }
                    function b(e, r, n) {
                        (e |= 0), (r |= 0), (n |= 0);
                        var t = 0,
                            i = 0,
                            _ = 0,
                            o = 0,
                            a = 0,
                            u = 0;
                        switch (
                            ((a = on),
                            (on = (on + 576) | 0),
                            (_ = (a + 40) | 0),
                            (i = (a + 56) | 0),
                            (u = a),
                            (Kr[u >> 2] = 40),
                            G(e, r, u),
                            (t = ((3 + ((0 | Kr[(u + 4) >> 2]) >>> n)) | 0) >>> 2),
                            (r = ((3 + ((0 | Kr[(u + 8) >> 2]) >>> n)) | 0) >>> 2),
                            (n = (u + 32) | 0),
                            (e = 0 | Kr[(n + 4) >> 2]),
                            0 | Kr[n >> 2])
                        ) {
                            case 0:
                                e ? (o = 14) : (e = 8);
                                break;
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                                o = e ? 14 : 13;
                                break;
                            case 9:
                            case 10:
                                e ? (o = 14) : (e = 8);
                                break;
                            default:
                                o = 14;
                        }
                        return (
                            13 == (0 | o)
                                ? (e = 16)
                                : 14 == (0 | o) &&
                                  ((Kr[_ >> 2] = 866),
                                  (Kr[(_ + 4) >> 2] = 2672),
                                  (Kr[(_ + 8) >> 2] = 1251),
                                  He(i, 812, _),
                                  ce(i),
                                  (e = 0)),
                            (u = 0 | cn(0 | cn(r, t), e)),
                            (on = a),
                            0 | u
                        );
                    }
                    function F(e, r) {
                        (e |= 0), (r |= 0);
                        var n = 0,
                            t = 0,
                            i = 0,
                            _ = 0;
                        switch (
                            ((i = on),
                            (on = (on + 576) | 0),
                            (t = (i + 40) | 0),
                            (n = (i + 56) | 0),
                            (_ = i),
                            (Kr[_ >> 2] = 40),
                            G(e, r, _),
                            (r = (_ + 32) | 0),
                            (e = 0 | Kr[(r + 4) >> 2]),
                            0 | Kr[r >> 2])
                        ) {
                            case 0:
                                if (!e) return (_ = 8), (on = i), 0 | _;
                                e = 14;
                                break;
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                                e = e ? 14 : 13;
                                break;
                            case 9:
                            case 10:
                                if (!e) return (_ = 8), (on = i), 0 | _;
                                e = 14;
                                break;
                            default:
                                e = 14;
                        }
                        return 13 == (0 | e)
                            ? ((_ = 16), (on = i), 0 | _)
                            : 14 == (0 | e)
                            ? ((Kr[t >> 2] = 866),
                              (Kr[(t + 4) >> 2] = 2672),
                              (Kr[(t + 8) >> 2] = 1251),
                              He(n, 812, t),
                              ce(n),
                              (_ = 0),
                              (on = i),
                              0 | _)
                            : 0;
                    }
                    function U(e, r, n, t, i, _, o) {
                        (e |= 0), (r |= 0), (n |= 0), (t |= 0), (i |= 0), (_ |= 0), (o |= 0);
                        var a = 0,
                            u = 0,
                            T = 0,
                            l = 0;
                        if (
                            ((l = 0 | Kr[(e + 88) >> 2]),
                            (u = ((Zr[(l + 12) >> 0] << 8) | Zr[(l + 13) >> 0]) >>> o),
                            (T = ((Zr[(l + 14) >> 0] << 8) | Zr[(l + 15) >> 0]) >>> o),
                            (u = (((u >>> 0 > 1 ? u : 1) + 3) | 0) >>> 2),
                            (T = (((T >>> 0 > 1 ? T : 1) + 3) | 0) >>> 2),
                            (l = (l + 18) | 0),
                            (o = 0 | Xr[l >> 0]),
                            (o =
                                0 |
                                cn(u, ((o << 24) >> 24 == 0) | ((o << 24) >> 24 == 9) ? 8 : 16)),
                            _)
                        ) {
                            if (!((0 == ((3 & _) | 0)) & (o >>> 0 <= _ >>> 0))) return 0 | (i = 0);
                            o = _;
                        }
                        if ((0 | cn(o, T)) >>> 0 > i >>> 0) return 0 | (i = 0);
                        if (((_ = ((u + 1) | 0) >>> 1), (a = ((T + 1) | 0) >>> 1), !n))
                            return 0 | (i = 0);
                        switch (
                            ((Kr[(e + 92) >> 2] = r),
                            (Kr[(e + 96) >> 2] = r),
                            (Kr[(e + 104) >> 2] = n),
                            (Kr[(e + 100) >> 2] = r + n),
                            (Kr[(e + 108) >> 2] = 0),
                            (Kr[(e + 112) >> 2] = 0),
                            0 | Xr[l >> 0])
                        ) {
                            case 0:
                                if (!(0 | E(e, t, i, o, u, T, _, a))) return 0 | (i = 0);
                                break;
                            case 4:
                            case 6:
                            case 5:
                            case 3:
                            case 2:
                                if (!(0 | c(e, t, i, o, u, T, _, a))) return 0 | (i = 0);
                                break;
                            case 9:
                                if (!(0 | R(e, t, i, o, u, T, _, a))) return 0 | (i = 0);
                                break;
                            case 8:
                            case 7:
                                if (!(0 | f(e, t, i, o, u, T, _, a))) return 0 | (i = 0);
                                break;
                            default:
                                return 0 | (i = 0);
                        }
                        return 0 | (i = 1);
                    }
                    function m(e, r, n) {
                        (e |= 0), (r |= 0), (n |= 0);
                        var t = 0,
                            i = 0,
                            _ = 0;
                        if ((0 | n) >= 8192) return 0 | Pn(0 | e, 0 | r, 0 | n);
                        if (((_ = 0 | e), (i = (e + n) | 0), (3 & e) == (3 & r))) {
                            for (; 3 & e; ) {
                                if (!n) return 0 | _;
                                (Xr[e >> 0] = 0 | Xr[r >> 0]),
                                    (e = (e + 1) | 0),
                                    (r = (r + 1) | 0),
                                    (n = (n - 1) | 0);
                            }
                            for (n = (-4 & i) | 0, t = (n - 64) | 0; (0 | e) <= (0 | t); )
                                (Kr[e >> 2] = Kr[r >> 2]),
                                    (Kr[(e + 4) >> 2] = Kr[(r + 4) >> 2]),
                                    (Kr[(e + 8) >> 2] = Kr[(r + 8) >> 2]),
                                    (Kr[(e + 12) >> 2] = Kr[(r + 12) >> 2]),
                                    (Kr[(e + 16) >> 2] = Kr[(r + 16) >> 2]),
                                    (Kr[(e + 20) >> 2] = Kr[(r + 20) >> 2]),
                                    (Kr[(e + 24) >> 2] = Kr[(r + 24) >> 2]),
                                    (Kr[(e + 28) >> 2] = Kr[(r + 28) >> 2]),
                                    (Kr[(e + 32) >> 2] = Kr[(r + 32) >> 2]),
                                    (Kr[(e + 36) >> 2] = Kr[(r + 36) >> 2]),
                                    (Kr[(e + 40) >> 2] = Kr[(r + 40) >> 2]),
                                    (Kr[(e + 44) >> 2] = Kr[(r + 44) >> 2]),
                                    (Kr[(e + 48) >> 2] = Kr[(r + 48) >> 2]),
                                    (Kr[(e + 52) >> 2] = Kr[(r + 52) >> 2]),
                                    (Kr[(e + 56) >> 2] = Kr[(r + 56) >> 2]),
                                    (Kr[(e + 60) >> 2] = Kr[(r + 60) >> 2]),
                                    (e = (e + 64) | 0),
                                    (r = (r + 64) | 0);
                            for (; (0 | e) < (0 | n); )
                                (Kr[e >> 2] = Kr[r >> 2]), (e = (e + 4) | 0), (r = (r + 4) | 0);
                        } else
                            for (n = (i - 4) | 0; (0 | e) < (0 | n); )
                                (Xr[e >> 0] = 0 | Xr[r >> 0]),
                                    (Xr[(e + 1) >> 0] = 0 | Xr[(r + 1) >> 0]),
                                    (Xr[(e + 2) >> 0] = 0 | Xr[(r + 2) >> 0]),
                                    (Xr[(e + 3) >> 0] = 0 | Xr[(r + 3) >> 0]),
                                    (e = (e + 4) | 0),
                                    (r = (r + 4) | 0);
                        for (; (0 | e) < (0 | i); )
                            (Xr[e >> 0] = 0 | Xr[r >> 0]), (e = (e + 1) | 0), (r = (r + 1) | 0);
                        return 0 | _;
                    }
                    function D(e) {
                        e |= 0;
                        var r = 0,
                            n = 0,
                            t = 0,
                            i = 0;
                        if (
                            ((i = (e + 92) | 0),
                            (t = (e + 88) | 0),
                            (n = 0 | Kr[t >> 2]),
                            (r =
                                ((0 | Kr[(e + 4) >> 2]) +
                                    (((0 | Zr[(n + 68) >> 0]) << 8) |
                                        ((0 | Zr[(n + 67) >> 0]) << 16) |
                                        0 |
                                        Zr[(n + 69) >> 0])) |
                                0),
                            !(n = ((0 | Zr[(n + 65) >> 0]) << 8) | 0 | Zr[(n + 66) >> 0]))
                        )
                            return 0 | (i = 0);
                        if (
                            ((Kr[i >> 2] = r),
                            (Kr[(e + 96) >> 2] = r),
                            (Kr[(e + 104) >> 2] = n),
                            (Kr[(e + 100) >> 2] = r + n),
                            (Kr[(e + 108) >> 2] = 0),
                            (Kr[(e + 112) >> 2] = 0),
                            !(0 | a(i, (e + 116) | 0)))
                        )
                            return 0 | (i = 0);
                        r = 0 | Kr[t >> 2];
                        do {
                            if (((0 | Zr[(r + 39) >> 0]) << 8) | 0 | Zr[(r + 40) >> 0]) {
                                if (!(0 | a(i, (e + 140) | 0))) return 0 | (i = 0);
                                if (0 | a(i, (e + 188) | 0)) {
                                    r = 0 | Kr[t >> 2];
                                    break;
                                }
                                return 0 | (i = 0);
                            }
                            if (!(((0 | Zr[(r + 55) >> 0]) << 8) | 0 | Zr[(r + 56) >> 0]))
                                return 0 | (i = 0);
                        } while (0);
                        if (((0 | Zr[(r + 55) >> 0]) << 8) | 0 | Zr[(r + 56) >> 0] | 0) {
                            if (!(0 | a(i, (e + 164) | 0))) return 0 | (i = 0);
                            if (!(0 | a(i, (e + 212) | 0))) return 0 | (i = 0);
                        }
                        return 0 | (i = 1);
                    }
                    function p(e, r, n) {
                        (e |= 0), (r |= 0), (n |= 0);
                        var t = 0,
                            i = 0,
                            _ = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            E = 0,
                            f = 0,
                            T = 0,
                            c = 0,
                            l = 0;
                        (T = on),
                            (on = (on + 48) | 0),
                            (E = (T + 16) | 0),
                            (_ = T),
                            (i = (T + 32) | 0),
                            (a = (e + 28) | 0),
                            (t = 0 | Kr[a >> 2]),
                            (Kr[i >> 2] = t),
                            (u = (e + 20) | 0),
                            (t = ((0 | Kr[u >> 2]) - t) | 0),
                            (Kr[(i + 4) >> 2] = t),
                            (Kr[(i + 8) >> 2] = r),
                            (Kr[(i + 12) >> 2] = n),
                            (t = (t + n) | 0),
                            (o = (e + 60) | 0),
                            (Kr[_ >> 2] = Kr[o >> 2]),
                            (Kr[(_ + 4) >> 2] = i),
                            (Kr[(_ + 8) >> 2] = 2),
                            (_ = 0 | $e(0 | Fn(146, 0 | _)));
                        e: do {
                            if ((0 | t) != (0 | _)) {
                                for (r = 2; ; ) {
                                    if ((0 | _) < 0) break;
                                    if (
                                        ((t = (t - _) | 0),
                                        (l = 0 | Kr[(i + 4) >> 2]),
                                        (c = _ >>> 0 > l >>> 0),
                                        (i = c ? (i + 8) | 0 : i),
                                        (r = (((c << 31) >> 31) + r) | 0),
                                        (l = (_ - (c ? l : 0)) | 0),
                                        (Kr[i >> 2] = (0 | Kr[i >> 2]) + l),
                                        (c = (i + 4) | 0),
                                        (Kr[c >> 2] = (0 | Kr[c >> 2]) - l),
                                        (Kr[E >> 2] = Kr[o >> 2]),
                                        (Kr[(E + 4) >> 2] = i),
                                        (Kr[(E + 8) >> 2] = r),
                                        (_ = 0 | $e(0 | Fn(146, 0 | E))),
                                        (0 | t) == (0 | _))
                                    ) {
                                        f = 3;
                                        break e;
                                    }
                                }
                                (Kr[(e + 16) >> 2] = 0),
                                    (Kr[a >> 2] = 0),
                                    (Kr[u >> 2] = 0),
                                    (Kr[e >> 2] = 32 | Kr[e >> 2]),
                                    (n = 2 == (0 | r) ? 0 : (n - (0 | Kr[(i + 4) >> 2])) | 0);
                            } else f = 3;
                        } while (0);
                        return (
                            3 == (0 | f) &&
                                ((l = 0 | Kr[(e + 44) >> 2]),
                                (Kr[(e + 16) >> 2] = l + (0 | Kr[(e + 48) >> 2])),
                                (Kr[a >> 2] = l),
                                (Kr[u >> 2] = l)),
                            (on = T),
                            0 | n
                        );
                    }
                    function v(e, r, n, t, i) {
                        (e |= 0), (r |= 0), (n |= 0), (t |= 0), (i |= 0);
                        var _ = 0,
                            o = 0,
                            a = 0,
                            u = 0;
                        do {
                            if (0 | ur(e, 0 | Kr[(r + 8) >> 2], i)) Fe(0, r, n, t);
                            else {
                                if (((_ = (e + 8) | 0), !(0 | ur(e, 0 | Kr[r >> 2], i)))) {
                                    (a = 0 | Kr[_ >> 2]),
                                        mn[3 & Kr[(24 + (0 | Kr[a >> 2])) >> 2]](a, r, n, t, i);
                                    break;
                                }
                                if (
                                    ((e = (r + 32) | 0),
                                    (0 | Kr[(r + 16) >> 2]) != (0 | n)
                                        ? ((o = (r + 20) | 0), (0 | Kr[o >> 2]) != (0 | n))
                                        : 0)
                                ) {
                                    if (
                                        ((Kr[e >> 2] = t),
                                        (t = (r + 44) | 0),
                                        4 == (0 | Kr[t >> 2]))
                                    )
                                        break;
                                    (e = (r + 52) | 0),
                                        (Xr[e >> 0] = 0),
                                        (u = (r + 53) | 0),
                                        (Xr[u >> 0] = 0),
                                        (_ = 0 | Kr[_ >> 2]),
                                        kn[3 & Kr[(20 + (0 | Kr[_ >> 2])) >> 2]](_, r, n, n, 1, i),
                                        0 | Xr[u >> 0]
                                            ? 0 | Xr[e >> 0]
                                                ? (e = 3)
                                                : ((e = 3), (a = 11))
                                            : ((e = 4), (a = 11)),
                                        11 == (0 | a) &&
                                            ((Kr[o >> 2] = n),
                                            (u = (r + 40) | 0),
                                            (Kr[u >> 2] = 1 + (0 | Kr[u >> 2])),
                                            (1 == (0 | Kr[(r + 36) >> 2])
                                                ? 2 == (0 | Kr[(r + 24) >> 2])
                                                : 0) && (Xr[(r + 54) >> 0] = 1)),
                                        (Kr[t >> 2] = e);
                                    break;
                                }
                                1 == (0 | t) && (Kr[e >> 2] = 1);
                            }
                        } while (0);
                    }
                    function B(e, r, n) {
                        (e |= 0), (r |= 0), (n |= 0);
                        var t = 0,
                            i = 0,
                            _ = 0,
                            a = 0,
                            u = 0,
                            E = 0,
                            f = 0,
                            T = 0,
                            c = 0,
                            l = 0,
                            s = 0,
                            A = 0,
                            R = 0;
                        (R = on),
                            (on = (on + 224) | 0),
                            (T = (R + 120) | 0),
                            (c = (R + 80) | 0),
                            (s = R),
                            (A = (R + 136) | 0),
                            (t = c),
                            (i = (t + 40) | 0);
                        do {
                            (Kr[t >> 2] = 0), (t = (t + 4) | 0);
                        } while ((0 | t) < (0 | i));
                        return (
                            (Kr[T >> 2] = Kr[n >> 2]),
                            (0 | o(0, r, T, s, c)) < 0
                                ? (n = -1)
                                : ((l = (0 | Kr[(e + 76) >> 2]) > -1 ? 0 | kr(e) : 0),
                                  (n = 0 | Kr[e >> 2]),
                                  (f = 32 & n),
                                  (0 | Xr[(e + 74) >> 0]) < 1 && (Kr[e >> 2] = -33 & n),
                                  (t = (e + 48) | 0),
                                  0 | Kr[t >> 2]
                                      ? (n = 0 | o(e, r, T, s, c))
                                      : ((i = (e + 44) | 0),
                                        (_ = 0 | Kr[i >> 2]),
                                        (Kr[i >> 2] = A),
                                        (a = (e + 28) | 0),
                                        (Kr[a >> 2] = A),
                                        (u = (e + 20) | 0),
                                        (Kr[u >> 2] = A),
                                        (Kr[t >> 2] = 80),
                                        (E = (e + 16) | 0),
                                        (Kr[E >> 2] = A + 80),
                                        (n = 0 | o(e, r, T, s, c)),
                                        _ &&
                                            (Un[7 & Kr[(e + 36) >> 2]](e, 0, 0),
                                            (n = 0 == (0 | Kr[u >> 2]) ? -1 : n),
                                            (Kr[i >> 2] = _),
                                            (Kr[t >> 2] = 0),
                                            (Kr[E >> 2] = 0),
                                            (Kr[a >> 2] = 0),
                                            (Kr[u >> 2] = 0))),
                                  (t = 0 | Kr[e >> 2]),
                                  (Kr[e >> 2] = t | f),
                                  0 | l && Br(e),
                                  (n = 0 == ((32 & t) | 0) ? n : -1)),
                            (on = R),
                            0 | n
                        );
                    }
                    function k(e, r, n, t) {
                        (e |= 0), (r |= 0), (n |= 0), (t |= 0);
                        var i = 0,
                            _ = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            E = 0,
                            f = 0,
                            T = 0,
                            c = 0;
                        (c = on),
                            (on = (on + 64) | 0),
                            (f = c),
                            (E = 0 | Kr[e >> 2]),
                            (T = (e + (0 | Kr[(E + -8) >> 2])) | 0),
                            (E = 0 | Kr[(E + -4) >> 2]),
                            (Kr[f >> 2] = n),
                            (Kr[(f + 4) >> 2] = e),
                            (Kr[(f + 8) >> 2] = r),
                            (Kr[(f + 12) >> 2] = t),
                            (e = (f + 16) | 0),
                            (r = (f + 20) | 0),
                            (t = (f + 24) | 0),
                            (i = (f + 28) | 0),
                            (_ = (f + 32) | 0),
                            (o = (f + 40) | 0),
                            (a = e),
                            (u = (a + 36) | 0);
                        do {
                            (Kr[a >> 2] = 0), (a = (a + 4) | 0);
                        } while ((0 | a) < (0 | u));
                        (Yr[(e + 36) >> 1] = 0), (Xr[(e + 38) >> 0] = 0);
                        e: do {
                            if (0 | ur(E, n, 0))
                                (Kr[(f + 48) >> 2] = 1),
                                    kn[3 & Kr[(20 + (0 | Kr[E >> 2])) >> 2]](E, f, T, T, 1, 0),
                                    (e = 1 == (0 | Kr[t >> 2]) ? T : 0);
                            else {
                                switch (
                                    (mn[3 & Kr[(24 + (0 | Kr[E >> 2])) >> 2]](E, f, T, 1, 0),
                                    0 | Kr[(f + 36) >> 2])
                                ) {
                                    case 0:
                                        e =
                                            (1 == (0 | Kr[o >> 2])) &
                                            (1 == (0 | Kr[i >> 2])) &
                                            (1 == (0 | Kr[_ >> 2]))
                                                ? 0 | Kr[r >> 2]
                                                : 0;
                                        break e;
                                    case 1:
                                        break;
                                    default:
                                        e = 0;
                                        break e;
                                }
                                if (
                                    1 != (0 | Kr[t >> 2])
                                        ? !(
                                              (0 == (0 | Kr[o >> 2])) &
                                              (1 == (0 | Kr[i >> 2])) &
                                              (1 == (0 | Kr[_ >> 2]))
                                          )
                                        : 0
                                ) {
                                    e = 0;
                                    break;
                                }
                                e = 0 | Kr[e >> 2];
                            }
                        } while (0);
                        return (on = c), 0 | e;
                    }
                    function y(e) {
                        e |= 0;
                        var r = 0,
                            n = 0,
                            t = 0,
                            i = 0,
                            _ = 0,
                            o = 0,
                            a = 0,
                            E = 0;
                        if (
                            ((E = on),
                            (on = (on + 544) | 0),
                            (o = (E + 16) | 0),
                            (r = E),
                            (i = (E + 32) | 0),
                            (_ = (e + 8) | 0),
                            (n = 0 | Kr[_ >> 2]),
                            ((n + -1) | 0) >>> 0 >= 8192 &&
                                ((Kr[r >> 2] = 866),
                                (Kr[(r + 4) >> 2] = 3006),
                                (Kr[(r + 8) >> 2] = 1257),
                                He(i, 812, r),
                                ce(i)),
                            (Kr[e >> 2] = n),
                            (t = (e + 20) | 0),
                            (r = 0 | Kr[t >> 2]),
                            r
                                ? (a = n)
                                : ((r = 0 | j(180, 0)),
                                  r
                                      ? ((a = (r + 164) | 0),
                                        (Kr[a >> 2] = 0),
                                        (Kr[(a + 4) >> 2] = 0),
                                        (Kr[(a + 8) >> 2] = 0),
                                        (Kr[(a + 12) >> 2] = 0))
                                      : (r = 0),
                                  (Kr[t >> 2] = r),
                                  (a = 0 | Kr[e >> 2])),
                            0 | Kr[_ >> 2]
                                ? (o = a)
                                : ((Kr[o >> 2] = 866),
                                  (Kr[(o + 4) >> 2] = 910),
                                  (Kr[(o + 8) >> 2] = 1497),
                                  He(i, 812, o),
                                  ce(i),
                                  (o = 0 | Kr[e >> 2])),
                            (i = 0 | Kr[(e + 4) >> 2]),
                            !(o >>> 0 > 16))
                        )
                            return (e = 0), (e = 0 | u(r, a, i, e)), (on = E), 0 | e;
                        for (n = o, t = 0; ; ) {
                            if (((_ = (t + 1) | 0), !(n >>> 0 > 3))) break;
                            (n >>>= 1), (t = _);
                        }
                        return (
                            (e = (t + 2 + ((32 != (0 | _)) & ((1 << _) >>> 0 < o >>> 0) & 1)) | 0),
                            (e = 255 & (e >>> 0 < 11 ? e : 11)),
                            (e = 0 | u(r, a, i, e)),
                            (on = E),
                            0 | e
                        );
                    }
                    function g(e, r, n) {
                        (e |= 0), (r |= 0), (n |= 0);
                        var t = 0,
                            i = 0,
                            _ = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            E = 0,
                            f = 0,
                            T = 0,
                            c = 0;
                        (c = (1794895138 + (0 | Kr[e >> 2])) | 0),
                            (_ = 0 | Er(0 | Kr[(e + 8) >> 2], c)),
                            (t = 0 | Er(0 | Kr[(e + 12) >> 2], c)),
                            (i = 0 | Er(0 | Kr[(e + 16) >> 2], c));
                        e: do {
                            if (
                                (_ >>> 0 < (r >>> 2) >>> 0
                                  ? ((T = (r - (_ << 2)) | 0),
                                    (t >>> 0 < T >>> 0) & (i >>> 0 < T >>> 0))
                                  : 0)
                                    ? 0 == ((3 & (i | t)) | 0)
                                    : 0
                            ) {
                                for (T = t >>> 2, f = i >>> 2, E = 0; ; ) {
                                    if (
                                        ((a = _ >>> 1),
                                        (u = (E + a) | 0),
                                        (o = u << 1),
                                        (i = (o + T) | 0),
                                        (t = 0 | Er(0 | Kr[(e + (i << 2)) >> 2], c)),
                                        !(
                                            ((i = 0 | Er(0 | Kr[(e + ((i + 1) << 2)) >> 2], c)) >>>
                                                0 <
                                                r >>> 0) &
                                            (t >>> 0 < ((r - i) | 0) >>> 0)
                                        ))
                                    ) {
                                        t = 0;
                                        break e;
                                    }
                                    if (0 | Xr[(e + (i + t)) >> 0]) {
                                        t = 0;
                                        break e;
                                    }
                                    if (!(t = 0 | Me(n, (e + i) | 0))) break;
                                    if (((t = (0 | t) < 0), 1 == (0 | _))) {
                                        t = 0;
                                        break e;
                                    }
                                    (E = t ? E : u), (_ = t ? a : (_ - a) | 0);
                                }
                                (t = (o + f) | 0),
                                    (i = 0 | Er(0 | Kr[(e + (t << 2)) >> 2], c)),
                                    (t = 0 | Er(0 | Kr[(e + ((t + 1) << 2)) >> 2], c)),
                                    (t =
                                        (t >>> 0 < r >>> 0) & (i >>> 0 < ((r - t) | 0) >>> 0) &&
                                        0 == (0 | Xr[(e + (t + i)) >> 0])
                                            ? (e + t) | 0
                                            : 0);
                            } else t = 0;
                        } while (0);
                        return 0 | t;
                    }
                    function w(e) {
                        e |= 0;
                        var r = 0,
                            n = 0,
                            t = 0,
                            i = 0,
                            _ = 0,
                            o = 0,
                            a = 0,
                            u = 0;
                        (a = on),
                            (on = (on + 576) | 0),
                            (_ = (a + 48) | 0),
                            (o = (a + 32) | 0),
                            (t = (a + 16) | 0),
                            (n = a),
                            (i = (a + 64) | 0),
                            (r = 0 | Kr[(e + 168) >> 2]);
                        do {
                            if (0 | r) {
                                if (
                                    ((u = 0 | Kr[(r + -4) >> 2]),
                                    (r = (r + -8) | 0),
                                    (0 != (0 | u) ? (0 | u) == (0 | ~Kr[r >> 2]) : 0) ||
                                        ((Kr[n >> 2] = 866),
                                        (Kr[(n + 4) >> 2] = 651),
                                        (Kr[(n + 8) >> 2] = 1579),
                                        He(i, 812, n),
                                        ce(i)),
                                    7 & r)
                                ) {
                                    (Kr[t >> 2] = 866),
                                        (Kr[(t + 4) >> 2] = 2506),
                                        (Kr[(t + 8) >> 2] = 1232),
                                        He(i, 812, t),
                                        ce(i);
                                    break;
                                }
                                _e(r, 0, 0, 1, 0);
                                break;
                            }
                        } while (0);
                        return (r = 0 | Kr[(e + 176) >> 2])
                            ? ((u = 0 | Kr[(r + -4) >> 2]),
                              (r = (r + -8) | 0),
                              (0 != (0 | u) ? (0 | u) == (0 | ~Kr[r >> 2]) : 0) ||
                                  ((Kr[o >> 2] = 866),
                                  (Kr[(o + 4) >> 2] = 651),
                                  (Kr[(o + 8) >> 2] = 1579),
                                  He(i, 812, o),
                                  ce(i)),
                              7 & r
                                  ? ((Kr[_ >> 2] = 866),
                                    (Kr[(_ + 4) >> 2] = 2506),
                                    (Kr[(_ + 8) >> 2] = 1232),
                                    He(i, 812, _),
                                    ce(i),
                                    void (on = a))
                                  : (_e(r, 0, 0, 1, 0), void (on = a)))
                            : void (on = a);
                    }
                    function G(e, r, n) {
                        (e |= 0), (r |= 0), (n |= 0);
                        var t = 0;
                        return (0 != (0 | e)) & (r >>> 0 > 73) & (0 != (0 | n))
                            ? 40 != (0 | Kr[n >> 2])
                                ? 0 | (n = 0)
                                : 18552 != (((0 | Zr[e >> 0]) << 8) | 0 | Zr[(e + 1) >> 0] | 0)
                                ? 0 | (n = 0)
                                : (((0 | Zr[(e + 2) >> 0]) << 8) | 0 | Zr[(e + 3) >> 0]) >>> 0 < 74
                                ? 0 | (n = 0)
                                : (((0 | Zr[(e + 7) >> 0]) << 16) |
                                      ((0 | Zr[(e + 6) >> 0]) << 24) |
                                      ((0 | Zr[(e + 8) >> 0]) << 8) |
                                      0 |
                                      Zr[(e + 9) >> 0]) >>>
                                      0 >
                                  r >>> 0
                                ? 0 | (n = 0)
                                : ((Kr[(n + 4) >> 2] =
                                      ((0 | Zr[(e + 12) >> 0]) << 8) | 0 | Zr[(e + 13) >> 0]),
                                  (Kr[(n + 8) >> 2] =
                                      ((0 | Zr[(e + 14) >> 0]) << 8) | 0 | Zr[(e + 15) >> 0]),
                                  (Kr[(n + 12) >> 2] = Zr[(e + 16) >> 0]),
                                  (Kr[(n + 16) >> 2] = Zr[(e + 17) >> 0]),
                                  (r = (e + 18) | 0),
                                  (t = (n + 32) | 0),
                                  (Kr[t >> 2] = Zr[r >> 0]),
                                  (Kr[(t + 4) >> 2] = 0),
                                  (r = 0 | Xr[r >> 0]),
                                  (Kr[(n + 20) >> 2] =
                                      ((r << 24) >> 24 == 0) | ((r << 24) >> 24 == 9) ? 8 : 16),
                                  (Kr[(n + 24) >> 2] =
                                      ((0 | Zr[(e + 26) >> 0]) << 16) |
                                      ((0 | Zr[(e + 25) >> 0]) << 24) |
                                      ((0 | Zr[(e + 27) >> 0]) << 8) |
                                      0 |
                                      Zr[(e + 28) >> 0]),
                                  (Kr[(n + 28) >> 2] =
                                      ((0 | Zr[(e + 30) >> 0]) << 16) |
                                      ((0 | Zr[(e + 29) >> 0]) << 24) |
                                      ((0 | Zr[(e + 31) >> 0]) << 8) |
                                      0 |
                                      Zr[(e + 32) >> 0]),
                                  0 | (n = 1))
                            : 0 | (n = 0);
                    }
                    function H(e, r) {
                        (e |= 0), (r |= 0);
                        var n = 0,
                            t = 0,
                            i = 0,
                            _ = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            E = 0;
                        if (
                            ((E = on),
                            (on = (on + 544) | 0),
                            (a = (E + 16) | 0),
                            (n = E),
                            (o = (E + 32) | 0),
                            r >>> 0 >= 33 &&
                                ((Kr[n >> 2] = 866),
                                (Kr[(n + 4) >> 2] = 3199),
                                (Kr[(n + 8) >> 2] = 1350),
                                He(o, 812, n),
                                ce(o)),
                            (u = (e + 20) | 0),
                            (0 | (n = 0 | Kr[u >> 2])) >= (0 | r))
                        )
                            return (
                                (i = (e + 16) | 0),
                                (_ = i),
                                (i = 0 | Kr[i >> 2]),
                                (o = n),
                                (a = (32 - r) | 0),
                                (a = i >>> a),
                                (i <<= r),
                                (Kr[_ >> 2] = i),
                                (r = (o - r) | 0),
                                (Kr[u >> 2] = r),
                                (on = E),
                                0 | a
                            );
                        (i = (e + 4) | 0), (_ = (e + 8) | 0), (t = (e + 16) | 0);
                        do {
                            (e = 0 | Kr[i >> 2]),
                                (0 | e) == (0 | Kr[_ >> 2])
                                    ? (e = 0)
                                    : ((Kr[i >> 2] = e + 1), (e = 0 | Zr[e >> 0])),
                                (n = (n + 8) | 0),
                                (Kr[u >> 2] = n),
                                (0 | n) >= 33 &&
                                    ((Kr[a >> 2] = 866),
                                    (Kr[(a + 4) >> 2] = 3208),
                                    (Kr[(a + 8) >> 2] = 1366),
                                    He(o, 812, a),
                                    ce(o),
                                    (n = 0 | Kr[u >> 2])),
                                (e = (e << (32 - n)) | Kr[t >> 2]),
                                (Kr[t >> 2] = e);
                        } while ((0 | n) < (0 | r));
                        return (
                            (a = (32 - r) | 0),
                            (a = e >>> a),
                            (o = e << r),
                            (Kr[t >> 2] = o),
                            (r = (n - r) | 0),
                            (Kr[u >> 2] = r),
                            (on = E),
                            0 | a
                        );
                    }
                    function X(e, r, n) {
                        (e |= 0), (r |= 0), (n |= 0);
                        var t = 0,
                            i = 0,
                            _ = 0,
                            o = 0;
                        (_ = 255 & r), (t = 0 != (0 | n));
                        e: do {
                            if (t & (0 != ((3 & e) | 0)))
                                for (i = 255 & r; ; ) {
                                    if ((0 | Xr[e >> 0]) == (i << 24) >> 24) {
                                        o = 6;
                                        break e;
                                    }
                                    if (
                                        ((e = (e + 1) | 0),
                                        (n = (n + -1) | 0),
                                        !((t = 0 != (0 | n)) & (0 != ((3 & e) | 0))))
                                    ) {
                                        o = 5;
                                        break;
                                    }
                                }
                            else o = 5;
                        } while (0);
                        5 == (0 | o) && (t ? (o = 6) : (n = 0));
                        e: do {
                            if (
                                6 == (0 | o) &&
                                ((i = 255 & r), (0 | Xr[e >> 0]) != (i << 24) >> 24)
                            ) {
                                t = 0 | cn(_, 16843009);
                                r: do {
                                    if (n >>> 0 > 3)
                                        for (;;) {
                                            if (
                                                (((-2139062144 & (_ = Kr[e >> 2] ^ t)) ^
                                                    -2139062144) &
                                                    (_ + -16843009)) |
                                                0
                                            )
                                                break;
                                            if (
                                                ((e = (e + 4) | 0), (n = (n + -4) | 0) >>> 0 <= 3)
                                            ) {
                                                o = 11;
                                                break r;
                                            }
                                        }
                                    else o = 11;
                                } while (0);
                                if (11 == (0 | o) && !n) {
                                    n = 0;
                                    break;
                                }
                                for (;;) {
                                    if ((0 | Xr[e >> 0]) == (i << 24) >> 24) break e;
                                    if (((e = (e + 1) | 0), !(n = (n + -1) | 0))) {
                                        n = 0;
                                        break;
                                    }
                                }
                            }
                        } while (0);
                        return 0 | (0 | n ? e : 0);
                    }
                    function V(e, r, n, t, i) {
                        (e |= 0), (r |= 0), (n |= 0), (t |= 0), (i |= 0);
                        var _ = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            E = 0,
                            f = 0;
                        return (
                            (f = on),
                            (on = (on + 528) | 0),
                            (E = f),
                            (u = (f + 16) | 0),
                            (o = 0 | Kr[(e + 88) >> 2]),
                            (a =
                                ((0 | Zr[(o + 70 + (i << 2) + 1) >> 0]) << 16) |
                                ((0 | Zr[(o + 70 + (i << 2)) >> 0]) << 24) |
                                ((0 | Zr[(o + 70 + (i << 2) + 2) >> 0]) << 8) |
                                0 |
                                Zr[(o + 70 + (i << 2) + 3) >> 0]),
                            (_ = (i + 1) | 0),
                            (_ =
                                _ >>> 0 < (0 | Zr[(o + 16) >> 0]) >>> 0
                                    ? ((0 | Zr[(o + 70 + (_ << 2) + 1) >> 0]) << 16) |
                                      ((0 | Zr[(o + 70 + (_ << 2)) >> 0]) << 24) |
                                      ((0 | Zr[(o + 70 + (_ << 2) + 2) >> 0]) << 8) |
                                      0 |
                                      Zr[(o + 70 + (_ << 2) + 3) >> 0]
                                    : 0 | Kr[(e + 8) >> 2]) >>>
                                0 >
                            a >>> 0
                                ? ((u = (e + 4) | 0),
                                  (u = 0 | Kr[u >> 2]),
                                  (u = (u + a) | 0),
                                  (E = (_ - a) | 0),
                                  (E = 0 | U(e, u, E, r, n, t, i)),
                                  (on = f),
                                  0 | E)
                                : ((Kr[E >> 2] = 866),
                                  (Kr[(E + 4) >> 2] = 3694),
                                  (Kr[(E + 8) >> 2] = 1508),
                                  He(u, 812, E),
                                  ce(u),
                                  (u = (e + 4) | 0),
                                  (u = 0 | Kr[u >> 2]),
                                  (u = (u + a) | 0),
                                  (E = (_ - a) | 0),
                                  (E = 0 | U(e, u, E, r, n, t, i)),
                                  (on = f),
                                  0 | E)
                        );
                    }
                    function Y(e, r, n) {
                        (e |= 0), (r |= 0), (n |= 0);
                        var t = 0,
                            i = 0;
                        if (
                            (((0 == (0 | r)) | (n >>> 0 < 74)
                              ? 0
                              : 18552 == (((0 | Zr[r >> 0]) << 8) | 0 | Zr[(r + 1) >> 0] | 0))
                              ? (((0 | Zr[(r + 2) >> 0]) << 8) | 0 | Zr[(r + 3) >> 0]) >>> 0 >= 74
                              : 0)
                                ? (((0 | Zr[(r + 7) >> 0]) << 16) |
                                      ((0 | Zr[(r + 6) >> 0]) << 24) |
                                      ((0 | Zr[(r + 8) >> 0]) << 8) |
                                      0 |
                                      Zr[(r + 9) >> 0]) >>>
                                      0 <=
                                  n >>> 0
                                : 0
                        ) {
                            if (
                                ((t = (e + 88) | 0),
                                (Kr[t >> 2] = r),
                                (Kr[(e + 4) >> 2] = r),
                                (Kr[(e + 8) >> 2] = n),
                                !(0 | D(e)))
                            )
                                return 0 | (i = 0);
                            if (
                                ((r = 0 | Kr[t >> 2]),
                                ((0 | Zr[(r + 39) >> 0]) << 8) | 0 | Zr[(r + 40) >> 0]
                                    ? (0 | N(e) ? 0 | A(e) : 0) && ((r = 0 | Kr[t >> 2]), (i = 11))
                                    : (i = 11),
                                11 == (0 | i))
                            ) {
                                if (!(((0 | Zr[(r + 55) >> 0]) << 8) | 0 | Zr[(r + 56) >> 0]))
                                    return 0 | (i = 1);
                                if (0 | h(e) ? 0 | s(e) : 0) return 0 | (i = 1);
                            }
                            return 0 | (i = 0);
                        }
                        return (Kr[(e + 88) >> 2] = 0), 0 | (i = 0);
                    }
                    function x(e, r) {
                        (e |= 0), (r |= 0);
                        var n = 0,
                            t = 0,
                            i = 0,
                            _ = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            E = 0;
                        if (((E = on), (on = (on + 528) | 0), (o = E), (_ = (E + 16) | 0), !r))
                            return (u = 0), (on = E), 0 | u;
                        if (r >>> 0 <= 16) return (u = 0 | H(e, r)), (on = E), 0 | u;
                        if (
                            ((a = 0 | H(e, (r + -16) | 0)),
                            (u = (e + 20) | 0),
                            (0 | (r = 0 | Kr[u >> 2])) < 16)
                        ) {
                            (t = (e + 4) | 0), (i = (e + 8) | 0), (n = (e + 16) | 0);
                            do {
                                (e = 0 | Kr[t >> 2]),
                                    (0 | e) == (0 | Kr[i >> 2])
                                        ? (e = 0)
                                        : ((Kr[t >> 2] = e + 1), (e = 0 | Zr[e >> 0])),
                                    (r = (r + 8) | 0),
                                    (Kr[u >> 2] = r),
                                    (0 | r) >= 33 &&
                                        ((Kr[o >> 2] = 866),
                                        (Kr[(o + 4) >> 2] = 3208),
                                        (Kr[(o + 8) >> 2] = 1366),
                                        He(_, 812, o),
                                        ce(_),
                                        (r = 0 | Kr[u >> 2])),
                                    (e = (e << (32 - r)) | Kr[n >> 2]),
                                    (Kr[n >> 2] = e);
                            } while ((0 | r) < 16);
                        } else (e = (e + 16) | 0), (n = e), (e = 0 | Kr[e >> 2]);
                        return (
                            (Kr[n >> 2] = e << 16),
                            (Kr[u >> 2] = r + -16),
                            (u = (e >>> 16) | (a << 16)),
                            (on = E),
                            0 | u
                        );
                    }
                    function K(e, r, n) {
                        (e |= 0), (r |= 0), (n |= 0);
                        var t = 0,
                            i = 0,
                            _ = 0,
                            o = 0,
                            a = 0;
                        (t = (n + 16) | 0),
                            (i = 0 | Kr[t >> 2]),
                            i ? (_ = 5) : 0 | de(n) ? (t = 0) : ((i = 0 | Kr[t >> 2]), (_ = 5));
                        e: do {
                            if (5 == (0 | _)) {
                                if (
                                    ((a = (n + 20) | 0),
                                    (o = 0 | Kr[a >> 2]),
                                    (t = o),
                                    ((i - o) | 0) >>> 0 < r >>> 0)
                                ) {
                                    t = 0 | Un[7 & Kr[(n + 36) >> 2]](n, e, r);
                                    break;
                                }
                                r: do {
                                    if ((0 | Xr[(n + 75) >> 0]) > -1) {
                                        for (o = r; ; ) {
                                            if (!o) {
                                                (_ = 0), (i = e);
                                                break r;
                                            }
                                            if (((i = (o + -1) | 0), 10 == (0 | Xr[(e + i) >> 0])))
                                                break;
                                            o = i;
                                        }
                                        if (
                                            (t = 0 | Un[7 & Kr[(n + 36) >> 2]](n, e, o)) >>> 0 <
                                            o >>> 0
                                        )
                                            break e;
                                        (_ = o),
                                            (i = (e + o) | 0),
                                            (r = (r - o) | 0),
                                            (t = 0 | Kr[a >> 2]);
                                    } else (_ = 0), (i = e);
                                } while (0);
                                m(0 | t, 0 | i, 0 | r),
                                    (Kr[a >> 2] = (0 | Kr[a >> 2]) + r),
                                    (t = (_ + r) | 0);
                            }
                        } while (0);
                        return 0 | t;
                    }
                    function W(e, r, n) {
                        (e |= 0), (r |= 0), (n |= 0);
                        do {
                            if (e) {
                                if (r >>> 0 < 128) {
                                    (Xr[e >> 0] = r), (e = 1);
                                    break;
                                }
                                if (((n = (188 + (0 | br())) | 0), !(0 | Kr[Kr[n >> 2] >> 2]))) {
                                    if (57216 == ((-128 & r) | 0)) {
                                        (Xr[e >> 0] = r), (e = 1);
                                        break;
                                    }
                                    (e = 0 | Pr()), (Kr[e >> 2] = 84), (e = -1);
                                    break;
                                }
                                if (r >>> 0 < 2048) {
                                    (Xr[e >> 0] = (r >>> 6) | 192),
                                        (Xr[(e + 1) >> 0] = (63 & r) | 128),
                                        (e = 2);
                                    break;
                                }
                                if ((r >>> 0 < 55296) | (57344 == ((-8192 & r) | 0))) {
                                    (Xr[e >> 0] = (r >>> 12) | 224),
                                        (Xr[(e + 1) >> 0] = ((r >>> 6) & 63) | 128),
                                        (Xr[(e + 2) >> 0] = (63 & r) | 128),
                                        (e = 3);
                                    break;
                                }
                                if (((r + -65536) | 0) >>> 0 < 1048576) {
                                    (Xr[e >> 0] = (r >>> 18) | 240),
                                        (Xr[(e + 1) >> 0] = ((r >>> 12) & 63) | 128),
                                        (Xr[(e + 2) >> 0] = ((r >>> 6) & 63) | 128),
                                        (Xr[(e + 3) >> 0] = (63 & r) | 128),
                                        (e = 4);
                                    break;
                                }
                                (e = 0 | Pr()), (Kr[e >> 2] = 84), (e = -1);
                                break;
                            }
                            e = 1;
                        } while (0);
                        return 0 | e;
                    }
                    function Z() {
                        var e = 0,
                            r = 0,
                            n = 0,
                            t = 0,
                            i = 0,
                            _ = 0,
                            o = 0,
                            a = 0;
                        (i = on),
                            (on = (on + 48) | 0),
                            (o = (i + 32) | 0),
                            (n = (i + 24) | 0),
                            (a = (i + 16) | 0),
                            (_ = i),
                            (i = (i + 36) | 0),
                            (e = 0 | ye()),
                            (0 | e ? 0 | (t = 0 | Kr[e >> 2]) : 0) &&
                                ((e = (t + 48) | 0),
                                (r = 0 | Kr[e >> 2]),
                                (e = 0 | Kr[(e + 4) >> 2]),
                                (1126902528 == ((-256 & r) | 0)) & (1129074247 == (0 | e)) ||
                                    ((Kr[n >> 2] = 4168), Ke(4118, n)),
                                (e =
                                    (1126902529 == (0 | r)) & (1129074247 == (0 | e))
                                        ? 0 | Kr[(t + 44) >> 2]
                                        : (t + 80) | 0),
                                (Kr[i >> 2] = e),
                                (t = 0 | Kr[t >> 2]),
                                (e = 0 | Kr[(t + 4) >> 2]),
                                0 | Un[7 & Kr[(16 + (0 | Kr[2])) >> 2]](8, t, i)
                                    ? ((a = 0 | Kr[i >> 2]),
                                      (a = 0 | pn[1 & Kr[(8 + (0 | Kr[a >> 2])) >> 2]](a)),
                                      (Kr[_ >> 2] = 4168),
                                      (Kr[(_ + 4) >> 2] = e),
                                      (Kr[(_ + 8) >> 2] = a),
                                      Ke(4032, _))
                                    : ((Kr[a >> 2] = 4168), (Kr[(a + 4) >> 2] = e), Ke(4077, a))),
                            Ke(4156, o);
                    }
                    function z(e) {
                        e |= 0;
                        var r = 0,
                            n = 0,
                            t = 0,
                            i = 0,
                            _ = 0;
                        (_ = on),
                            (on = (on + 544) | 0),
                            (i = (_ + 16) | 0),
                            (n = _),
                            (t = (_ + 32) | 0),
                            (r = 0 | Kr[(e + 20) >> 2]);
                        do {
                            if (0 | r) {
                                if ((w(r), 7 & r)) {
                                    (Kr[n >> 2] = 866),
                                        (Kr[(n + 4) >> 2] = 2506),
                                        (Kr[(n + 8) >> 2] = 1232),
                                        He(t, 812, n),
                                        ce(t);
                                    break;
                                }
                                _e(r, 0, 0, 1, 0);
                                break;
                            }
                        } while (0);
                        if (((r = (e + 4) | 0), !(n = 0 | Kr[r >> 2])))
                            return (i = (e + 16) | 0), (Xr[i >> 0] = 0), void (on = _);
                        7 & n
                            ? ((Kr[i >> 2] = 866),
                              (Kr[(i + 4) >> 2] = 2506),
                              (Kr[(i + 8) >> 2] = 1232),
                              He(t, 812, i),
                              ce(t))
                            : _e(n, 0, 0, 1, 0),
                            (Kr[r >> 2] = 0),
                            (Kr[(e + 8) >> 2] = 0),
                            (Kr[(e + 12) >> 2] = 0),
                            (i = (e + 16) | 0),
                            (Xr[i >> 0] = 0),
                            (on = _);
                    }
                    function j(e, r) {
                        (e |= 0), (r |= 0);
                        var n = 0,
                            t = 0,
                            i = 0,
                            _ = 0,
                            o = 0,
                            a = 0,
                            u = 0;
                        return (
                            (u = on),
                            (on = (on + 560) | 0),
                            (a = (u + 32) | 0),
                            (o = (u + 16) | 0),
                            (n = u),
                            (_ = (u + 48) | 0),
                            (i = (u + 44) | 0),
                            (t = (e + 3) & -4),
                            (t = 0 | t ? t : 4) >>> 0 > 2147418112
                                ? ((Kr[n >> 2] = 866),
                                  (Kr[(n + 4) >> 2] = 2506),
                                  (Kr[(n + 8) >> 2] = 1103),
                                  He(_, 812, n),
                                  ce(_),
                                  (a = 0),
                                  (on = u),
                                  0 | a)
                                : ((Kr[i >> 2] = t),
                                  (e = 0 | _e(0, t, i, 1, 0)),
                                  (n = 0 | Kr[i >> 2]),
                                  0 | r && (Kr[r >> 2] = n),
                                  (0 == (0 | e)) | (n >>> 0 < t >>> 0)
                                      ? ((Kr[o >> 2] = 866),
                                        (Kr[(o + 4) >> 2] = 2506),
                                        (Kr[(o + 8) >> 2] = 1129),
                                        He(_, 812, o),
                                        ce(_),
                                        (e = 0))
                                      : 7 & e &&
                                        ((Kr[a >> 2] = 866),
                                        (Kr[(a + 4) >> 2] = 2533),
                                        (Kr[(a + 8) >> 2] = 1156),
                                        He(_, 812, a),
                                        ce(_)),
                                  (a = e),
                                  (on = u),
                                  0 | a)
                        );
                    }
                    function J(e) {
                        e |= 0;
                        var r = 0,
                            n = 0,
                            t = 0,
                            i = 0,
                            _ = 0,
                            o = 0;
                        if (
                            ((o = on),
                            (on = (on + 544) | 0),
                            (_ = (o + 16) | 0),
                            (t = o),
                            (i = (o + 32) | 0),
                            (Kr[e >> 2] = 0),
                            (r = (e + 4) | 0),
                            (n = 0 | Kr[r >> 2]),
                            0 | n &&
                                (7 & n
                                    ? ((Kr[t >> 2] = 866),
                                      (Kr[(t + 4) >> 2] = 2506),
                                      (Kr[(t + 8) >> 2] = 1232),
                                      He(i, 812, t),
                                      ce(i))
                                    : _e(n, 0, 0, 1, 0),
                                (Kr[r >> 2] = 0),
                                (Kr[(e + 8) >> 2] = 0),
                                (Kr[(e + 12) >> 2] = 0)),
                            (Xr[(e + 16) >> 0] = 0),
                            (e = (e + 20) | 0),
                            !(r = 0 | Kr[e >> 2]))
                        )
                            return void (on = o);
                        w(r),
                            7 & r
                                ? ((Kr[_ >> 2] = 866),
                                  (Kr[(_ + 4) >> 2] = 2506),
                                  (Kr[(_ + 8) >> 2] = 1232),
                                  He(i, 812, _),
                                  ce(i))
                                : _e(r, 0, 0, 1, 0),
                            (Kr[e >> 2] = 0),
                            (on = o);
                    }
                    function Q(e, r, n, t) {
                        (e |= 0), (r |= 0), (n |= 0), (t |= 0);
                        var i = 0,
                            _ = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            E = 0,
                            f = 0;
                        (f = on),
                            (on = (on + 128) | 0),
                            (i = (f + 124) | 0),
                            (E = f),
                            (_ = E),
                            (o = 604),
                            (a = (_ + 124) | 0);
                        do {
                            (Kr[_ >> 2] = Kr[o >> 2]), (_ = (_ + 4) | 0), (o = (o + 4) | 0);
                        } while ((0 | _) < (0 | a));
                        return (
                            ((r + -1) | 0) >>> 0 > 2147483646
                                ? r
                                    ? ((r = 0 | Pr()), (Kr[r >> 2] = 75), (r = -1))
                                    : ((e = i), (r = 1), (u = 4))
                                : (u = 4),
                            4 == (0 | u) &&
                                ((u = (-2 - e) | 0),
                                (u = r >>> 0 > u >>> 0 ? u : r),
                                (Kr[(E + 48) >> 2] = u),
                                (i = (E + 20) | 0),
                                (Kr[i >> 2] = e),
                                (Kr[(E + 44) >> 2] = e),
                                (r = (e + u) | 0),
                                (e = (E + 16) | 0),
                                (Kr[e >> 2] = r),
                                (Kr[(E + 28) >> 2] = r),
                                (r = 0 | B(E, n, t)),
                                u &&
                                    ((E = 0 | Kr[i >> 2]),
                                    (Xr[
                                        (E + ((((0 | E) == (0 | Kr[e >> 2])) << 31) >> 31)) >> 0
                                    ] = 0))),
                            (on = f),
                            0 | r
                        );
                    }
                    function q(e, r, n, t) {
                        (e |= 0), (r |= 0), (n |= 0), (t |= 0);
                        var i = 0,
                            _ = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            E = 0;
                        return (
                            (E = on),
                            (on = (on + 560) | 0),
                            (u = (E + 32) | 0),
                            (_ = (E + 16) | 0),
                            (i = E),
                            (o = (E + 48) | 0),
                            (a = (E + 44) | 0),
                            (7 & e) | 0
                                ? ((Kr[i >> 2] = 866),
                                  (Kr[(i + 4) >> 2] = 2506),
                                  (Kr[(i + 8) >> 2] = 1210),
                                  He(o, 812, i),
                                  ce(o),
                                  (u = 0),
                                  (on = E),
                                  0 | u)
                                : r >>> 0 > 2147418112
                                ? ((Kr[_ >> 2] = 866),
                                  (Kr[(_ + 4) >> 2] = 2506),
                                  (Kr[(_ + 8) >> 2] = 1103),
                                  He(o, 812, _),
                                  ce(o),
                                  (u = 0),
                                  (on = E),
                                  0 | u)
                                : ((Kr[a >> 2] = r),
                                  (e = 0 | _e(e, r, a, t, 0)),
                                  0 | n && (Kr[n >> 2] = Kr[a >> 2]),
                                  (7 & e) | 0 &&
                                      ((Kr[u >> 2] = 866),
                                      (Kr[(u + 4) >> 2] = 2558),
                                      (Kr[(u + 8) >> 2] = 1156),
                                      He(o, 812, u),
                                      ce(o)),
                                  (u = e),
                                  (on = E),
                                  0 | u)
                        );
                    }
                    function $(e, r, n, t, i) {
                        (e |= 0), (r |= 0), (n |= 0), (t |= 0), (i |= 0);
                        var _ = 0;
                        do {
                            if (0 | ur(e, 0 | Kr[(r + 8) >> 2], i)) Fe(0, r, n, t);
                            else if (0 | ur(e, 0 | Kr[r >> 2], i)) {
                                if (
                                    ((e = (r + 32) | 0),
                                    (0 | Kr[(r + 16) >> 2]) != (0 | n)
                                        ? ((_ = (r + 20) | 0), (0 | Kr[_ >> 2]) != (0 | n))
                                        : 0)
                                ) {
                                    (Kr[e >> 2] = t),
                                        (Kr[_ >> 2] = n),
                                        (t = (r + 40) | 0),
                                        (Kr[t >> 2] = 1 + (0 | Kr[t >> 2])),
                                        (1 == (0 | Kr[(r + 36) >> 2])
                                            ? 2 == (0 | Kr[(r + 24) >> 2])
                                            : 0) && (Xr[(r + 54) >> 0] = 1),
                                        (Kr[(r + 44) >> 2] = 4);
                                    break;
                                }
                                1 == (0 | t) && (Kr[e >> 2] = 1);
                            }
                        } while (0);
                    }
                    function ee(e, r, n) {
                        (e |= 0), (r |= 0), (n |= 0);
                        var t = 0,
                            i = 0,
                            _ = 0,
                            o = 0;
                        if (((_ = (e + n) | 0), (r &= 255), (0 | n) >= 67)) {
                            for (; 3 & e; ) (Xr[e >> 0] = r), (e = (e + 1) | 0);
                            for (
                                t = (-4 & _) | 0,
                                    i = (t - 64) | 0,
                                    o = r | (r << 8) | (r << 16) | (r << 24);
                                (0 | e) <= (0 | i);

                            )
                                (Kr[e >> 2] = o),
                                    (Kr[(e + 4) >> 2] = o),
                                    (Kr[(e + 8) >> 2] = o),
                                    (Kr[(e + 12) >> 2] = o),
                                    (Kr[(e + 16) >> 2] = o),
                                    (Kr[(e + 20) >> 2] = o),
                                    (Kr[(e + 24) >> 2] = o),
                                    (Kr[(e + 28) >> 2] = o),
                                    (Kr[(e + 32) >> 2] = o),
                                    (Kr[(e + 36) >> 2] = o),
                                    (Kr[(e + 40) >> 2] = o),
                                    (Kr[(e + 44) >> 2] = o),
                                    (Kr[(e + 48) >> 2] = o),
                                    (Kr[(e + 52) >> 2] = o),
                                    (Kr[(e + 56) >> 2] = o),
                                    (Kr[(e + 60) >> 2] = o),
                                    (e = (e + 64) | 0);
                            for (; (0 | e) < (0 | t); ) (Kr[e >> 2] = o), (e = (e + 4) | 0);
                        }
                        for (; (0 | e) < (0 | _); ) (Xr[e >> 0] = r), (e = (e + 1) | 0);
                        return (_ - n) | 0;
                    }
                    function re(e, r, n, t, i) {
                        (e |= 0), (r |= 0), (n |= 0), (t |= 0), (i |= 0);
                        var _ = 0,
                            o = 0,
                            a = 0,
                            u = 0;
                        Xr[(r + 53) >> 0] = 1;
                        do {
                            if ((0 | Kr[(r + 4) >> 2]) == (0 | t)) {
                                if (
                                    ((Xr[(r + 52) >> 0] = 1),
                                    (t = (r + 16) | 0),
                                    (_ = 0 | Kr[t >> 2]),
                                    (a = (r + 54) | 0),
                                    (u = (r + 48) | 0),
                                    (o = (r + 24) | 0),
                                    (e = (r + 36) | 0),
                                    !_)
                                ) {
                                    if (
                                        ((Kr[t >> 2] = n),
                                        (Kr[o >> 2] = i),
                                        (Kr[e >> 2] = 1),
                                        !((1 == (0 | Kr[u >> 2])) & (1 == (0 | i))))
                                    )
                                        break;
                                    Xr[a >> 0] = 1;
                                    break;
                                }
                                if ((0 | _) != (0 | n)) {
                                    (Kr[e >> 2] = 1 + (0 | Kr[e >> 2])), (Xr[a >> 0] = 1);
                                    break;
                                }
                                (e = 0 | Kr[o >> 2]),
                                    2 == (0 | e) && ((Kr[o >> 2] = i), (e = i)),
                                    (1 == (0 | Kr[u >> 2])) & (1 == (0 | e)) && (Xr[a >> 0] = 1);
                            }
                        } while (0);
                    }
                    function ne(e, r, n) {
                        (e |= 0), (r |= 0), (n |= 0);
                        var t = 0,
                            i = 0,
                            _ = 0,
                            o = 0;
                        if (((o = on), (on = (on + 64) | 0), (i = o), 0 | ur(e, r, 0))) r = 1;
                        else if (0 != (0 | r) ? 0 != (0 | (_ = 0 | k(r, 32, 16, 0))) : 0) {
                            (r = (i + 4) | 0), (t = (r + 52) | 0);
                            do {
                                (Kr[r >> 2] = 0), (r = (r + 4) | 0);
                            } while ((0 | r) < (0 | t));
                            (Kr[i >> 2] = _),
                                (Kr[(i + 8) >> 2] = e),
                                (Kr[(i + 12) >> 2] = -1),
                                (Kr[(i + 48) >> 2] = 1),
                                yn[3 & Kr[(28 + (0 | Kr[_ >> 2])) >> 2]](_, i, 0 | Kr[n >> 2], 1),
                                1 == (0 | Kr[(i + 24) >> 2])
                                    ? ((Kr[n >> 2] = Kr[(i + 16) >> 2]), (r = 1))
                                    : (r = 0);
                        } else r = 0;
                        return (on = o), 0 | r;
                    }
                    function te(e, r) {
                        (e |= 0), (r |= 0);
                        var n = 0,
                            t = 0,
                            i = 0,
                            _ = 0,
                            o = 0,
                            a = 0,
                            u = 0;
                        (u = on),
                            (on = (on + 16) | 0),
                            (o = u),
                            (a = 255 & r),
                            (Xr[o >> 0] = a),
                            (t = (e + 16) | 0),
                            (i = 0 | Kr[t >> 2]),
                            i ? (_ = 4) : 0 | de(e) ? (n = -1) : ((i = 0 | Kr[t >> 2]), (_ = 4));
                        do {
                            if (4 == (0 | _)) {
                                if (
                                    ((_ = (e + 20) | 0),
                                    (t = 0 | Kr[_ >> 2]),
                                    t >>> 0 < i >>> 0
                                        ? (0 | (n = 255 & r)) != (0 | Xr[(e + 75) >> 0])
                                        : 0)
                                ) {
                                    (Kr[_ >> 2] = t + 1), (Xr[t >> 0] = a);
                                    break;
                                }
                                n =
                                    1 == (0 | Un[7 & Kr[(e + 36) >> 2]](e, o, 1))
                                        ? 0 | Zr[o >> 0]
                                        : -1;
                            }
                        } while (0);
                        return (on = u), 0 | n;
                    }
                    function ie(e, r) {
                        (e |= 0), (r |= 0);
                        var n = 0,
                            t = 0,
                            i = 0,
                            _ = 0,
                            o = 0,
                            a = 0,
                            u = 0;
                        (a = 255 & e),
                            (n = 255 & e),
                            ((0 | Kr[(r + 76) >> 2]) >= 0
                              ? 0 != (0 | kr(r))
                              : 0)
                                ? (((0 | n) != (0 | Xr[(r + 75) >> 0])
                                    ? ((_ = (r + 20) | 0),
                                      (o = 0 | Kr[_ >> 2]) >>> 0 < (0 | Kr[(r + 16) >> 2]) >>> 0)
                                    : 0)
                                      ? ((Kr[_ >> 2] = o + 1), (Xr[o >> 0] = a))
                                      : (n = 0 | te(r, e)),
                                  Br(r))
                                : (u = 3);
                        do {
                            if (3 == (0 | u)) {
                                if (
                                    (0 | n) != (0 | Xr[(r + 75) >> 0])
                                        ? ((t = (r + 20) | 0),
                                          (i = 0 | Kr[t >> 2]) >>> 0 <
                                              (0 | Kr[(r + 16) >> 2]) >>> 0)
                                        : 0
                                ) {
                                    (Kr[t >> 2] = i + 1), (Xr[i >> 0] = a);
                                    break;
                                }
                                n = 0 | te(r, e);
                            }
                        } while (0);
                        return 0 | n;
                    }
                    function _e(e, r, n, t, _) {
                        (e |= 0), (r |= 0), (n |= 0), (t |= 0), (_ |= 0);
                        do {
                            if (e) {
                                if (!r) {
                                    if ((T(e), !n)) {
                                        r = 0;
                                        break;
                                    }
                                    (Kr[n >> 2] = 0), (r = 0);
                                    break;
                                }
                                t ? ((r = 0 | fe(e, r)), (e = 0 == (0 | r) ? e : r)) : (r = 0),
                                    n && ((_ = 0 | Ge(e)), (Kr[n >> 2] = _));
                            } else (r = 0 | i(r)), n && ((e = r ? 0 | Ge(r) : 0), (Kr[n >> 2] = e));
                        } while (0);
                        return 0 | r;
                    }
                    function oe(e) {
                        e |= 0;
                        var r = 0,
                            n = 0,
                            t = 0;
                        t = e;
                        e: do {
                            if (3 & t)
                                for (r = t; ; ) {
                                    if (!(0 | Xr[e >> 0])) {
                                        e = r;
                                        break e;
                                    }
                                    if (((e = (e + 1) | 0), !(3 & (r = e)))) {
                                        n = 4;
                                        break;
                                    }
                                }
                            else n = 4;
                        } while (0);
                        if (4 == (0 | n)) {
                            for (;;) {
                                if (
                                    ((-2139062144 & (r = 0 | Kr[e >> 2])) ^ -2139062144) &
                                    (r + -16843009)
                                )
                                    break;
                                e = (e + 4) | 0;
                            }
                            if (((255 & r) << 24) >> 24)
                                do {
                                    e = (e + 1) | 0;
                                } while (0 != (0 | Xr[e >> 0]));
                        }
                        return (e - t) | 0;
                    }
                    function ae(e, r) {
                        (e = +e), (r |= 0);
                        var n = 0,
                            t = 0,
                            i = 0;
                        switch (
                            ((rn[_n >> 3] = e),
                            (n = 0 | Kr[_n >> 2]),
                            (t = 0 | Kr[(_n + 4) >> 2]),
                            2047 & (i = 0 | xe(0 | n, 0 | t, 52)))
                        ) {
                            case 0:
                                0 != e
                                    ? ((e = +ae(0x10000000000000000 * e, r)),
                                      (n = ((0 | Kr[r >> 2]) - 64) | 0))
                                    : (n = 0),
                                    (Kr[r >> 2] = n);
                                break;
                            case 2047:
                                break;
                            default:
                                (Kr[r >> 2] = (2047 & i) - 1022),
                                    (Kr[_n >> 2] = n),
                                    (Kr[(_n + 4) >> 2] = (-2146435073 & t) | 1071644672),
                                    (e = +rn[_n >> 3]);
                        }
                        return +e;
                    }
                    function ue(e, r) {
                        (e |= 0), (r |= 0);
                        var n = 0,
                            t = 0;
                        for (t = 0; ; ) {
                            if ((0 | Zr[(2140 + t) >> 0]) == (0 | e)) {
                                e = 2;
                                break;
                            }
                            if (87 == (0 | (n = (t + 1) | 0))) {
                                (n = 2228), (t = 87), (e = 5);
                                break;
                            }
                            t = n;
                        }
                        if (
                            (2 == (0 | e) && (t ? ((n = 2228), (e = 5)) : (n = 2228)), 5 == (0 | e))
                        )
                            for (;;) {
                                do {
                                    (e = n), (n = (n + 1) | 0);
                                } while (0 != (0 | Xr[e >> 0]));
                                if (!(t = (t + -1) | 0)) break;
                                e = 5;
                            }
                        return 0 | Nr(n, 0 | Kr[(r + 20) >> 2]);
                    }
                    function Ee(e, r, n) {
                        (e |= 0), (r |= 0), (n |= 0);
                        var t = 0;
                        if ((r >>> 0 > 0) | ((0 == (0 | r)) & (e >>> 0 > 4294967295))) {
                            for (;;) {
                                if (
                                    ((t = 0 | De(0 | e, 0 | r, 10, 0)),
                                    (n = (n + -1) | 0),
                                    (Xr[n >> 0] = (255 & t) | 48),
                                    (t = e),
                                    (e = 0 | fr(0 | e, 0 | r, 10, 0)),
                                    !((r >>> 0 > 9) | ((9 == (0 | r)) & (t >>> 0 > 4294967295))))
                                )
                                    break;
                                r = Tn;
                            }
                            r = e;
                        } else r = e;
                        if (r)
                            for (;;) {
                                if (
                                    ((n = (n + -1) | 0),
                                    (Xr[n >> 0] = 48 | (r >>> 0) % 10),
                                    r >>> 0 < 10)
                                )
                                    break;
                                r = ((r >>> 0) / 10) | 0;
                            }
                        return 0 | n;
                    }
                    function fe(e, r) {
                        (e |= 0), (r |= 0);
                        var n = 0,
                            t = 0;
                        return e
                            ? r >>> 0 > 4294967231
                                ? ((r = 0 | Pr()), (Kr[r >> 2] = 12), 0 | (r = 0))
                                : 0 | (n = 0 | M((e + -8) | 0, r >>> 0 < 11 ? 16 : (r + 11) & -8))
                                ? 0 | (r = (n + 8) | 0)
                                : (n = 0 | i(r))
                                ? ((t = 0 | Kr[(e + -4) >> 2]),
                                  (t = ((-8 & t) - (0 == ((3 & t) | 0) ? 8 : 4)) | 0),
                                  m(0 | n, 0 | e, 0 | (t >>> 0 < r >>> 0 ? t : r)),
                                  T(e),
                                  0 | (r = n))
                                : 0 | (r = 0)
                            : 0 | (r = 0 | i(r));
                    }
                    function Te(e, r, n, t) {
                        (e |= 0), (r |= 0), (n |= 0), (t |= 0);
                        var i = 0,
                            _ = 0,
                            o = 0;
                        (e = (r + 16) | 0),
                            (i = 0 | Kr[e >> 2]),
                            (_ = (r + 36) | 0),
                            (o = (r + 24) | 0);
                        do {
                            if (i) {
                                if ((0 | i) != (0 | n)) {
                                    (Kr[_ >> 2] = 1 + (0 | Kr[_ >> 2])),
                                        (Kr[o >> 2] = 2),
                                        (Xr[(r + 54) >> 0] = 1);
                                    break;
                                }
                                2 == (0 | Kr[o >> 2]) && (Kr[o >> 2] = t);
                            } else (Kr[e >> 2] = n), (Kr[o >> 2] = t), (Kr[_ >> 2] = 1);
                        } while (0);
                    }
                    function ce(e) {
                        e |= 0;
                        var r = 0,
                            n = 0,
                            t = 0,
                            i = 0;
                        (t = 0 | Kr[119]), (i = (0 | Kr[(t + 76) >> 2]) > -1 ? 0 | kr(t) : 0);
                        do {
                            if ((0 | nr(e, t)) < 0) e = 1;
                            else {
                                if (
                                    10 != (0 | Xr[(t + 75) >> 0])
                                        ? ((r = (t + 20) | 0),
                                          (n = 0 | Kr[r >> 2]) >>> 0 <
                                              (0 | Kr[(t + 16) >> 2]) >>> 0)
                                        : 0
                                ) {
                                    (Kr[r >> 2] = n + 1), (Xr[n >> 0] = 10), (e = 0);
                                    break;
                                }
                                e = (0 | te(t, 10)) < 0;
                            }
                        } while (0);
                        return 0 | i && Br(t), ((e << 31) >> 31) | 0;
                    }
                    function le(e, r, n, t, i, _) {
                        (e |= 0),
                            (r |= 0),
                            (n |= 0),
                            (t |= 0),
                            (i |= 0),
                            (_ |= 0),
                            0 | ur(e, 0 | Kr[(r + 8) >> 2], _)
                                ? re(0, r, n, t, i)
                                : ((e = 0 | Kr[(e + 8) >> 2]),
                                  kn[3 & Kr[(20 + (0 | Kr[e >> 2])) >> 2]](e, r, n, t, i, _));
                    }
                    function se(e, r, n, t, i) {
                        (e |= 0), (r |= 0), (n |= 0), (t |= 0), (i |= 0);
                        var _ = 0,
                            o = 0;
                        if (
                            ((o = on),
                            (on = (on + 256) | 0),
                            (_ = o),
                            ((0 | n) > (0 | t)) & (0 == ((73728 & i) | 0)))
                        ) {
                            if (
                                ((i = (n - t) | 0),
                                ee(0 | _, 0 | r, 0 | (i >>> 0 < 256 ? i : 256)),
                                i >>> 0 > 255)
                            ) {
                                r = (n - t) | 0;
                                do {
                                    tr(e, _, 256), (i = (i + -256) | 0);
                                } while (i >>> 0 > 255);
                                i = 255 & r;
                            }
                            tr(e, _, i);
                        }
                        on = o;
                    }
                    function Ae(e, r, n, t) {
                        (e |= 0),
                            (r |= 0),
                            (n |= 0),
                            (t |= 0),
                            0 | ur(e, 0 | Kr[(r + 8) >> 2], 0)
                                ? Te(0, r, n, t)
                                : ((e = 0 | Kr[(e + 8) >> 2]),
                                  yn[3 & Kr[(28 + (0 | Kr[e >> 2])) >> 2]](e, r, n, t));
                    }
                    function Re(e, r, n) {
                        (e |= 0), (r |= 0), (n |= 0);
                        var t = 0,
                            i = 0,
                            _ = 0;
                        return (
                            (i = on),
                            (on = (on + 32) | 0),
                            (_ = i),
                            (t = (i + 20) | 0),
                            (Kr[_ >> 2] = Kr[(e + 60) >> 2]),
                            (Kr[(_ + 4) >> 2] = 0),
                            (Kr[(_ + 8) >> 2] = r),
                            (Kr[(_ + 12) >> 2] = t),
                            (Kr[(_ + 16) >> 2] = n),
                            (0 | $e(0 | bn(140, 0 | _))) < 0
                                ? ((Kr[t >> 2] = -1), (e = -1))
                                : (e = 0 | Kr[t >> 2]),
                            (on = i),
                            0 | e
                        );
                    }
                    function de(e) {
                        e |= 0;
                        var r = 0,
                            n = 0;
                        return (
                            (r = (e + 74) | 0),
                            (n = 0 | Xr[r >> 0]),
                            (Xr[r >> 0] = (n + 255) | n),
                            (r = 0 | Kr[e >> 2]),
                            8 & r
                                ? ((Kr[e >> 2] = 32 | r), (e = -1))
                                : ((Kr[(e + 8) >> 2] = 0),
                                  (Kr[(e + 4) >> 2] = 0),
                                  (n = 0 | Kr[(e + 44) >> 2]),
                                  (Kr[(e + 28) >> 2] = n),
                                  (Kr[(e + 20) >> 2] = n),
                                  (Kr[(e + 16) >> 2] = n + (0 | Kr[(e + 48) >> 2])),
                                  (e = 0)),
                            0 | e
                        );
                    }
                    function Me(e, r) {
                        (e |= 0), (r |= 0);
                        var n = 0,
                            t = 0;
                        if (
                            ((n = 0 | Xr[e >> 0]),
                            (t = 0 | Xr[r >> 0]),
                            (n << 24) >> 24 == 0 ? 1 : (n << 24) >> 24 != (t << 24) >> 24)
                        )
                            e = t;
                        else {
                            do {
                                (e = (e + 1) | 0),
                                    (r = (r + 1) | 0),
                                    (n = 0 | Xr[e >> 0]),
                                    (t = 0 | Xr[r >> 0]);
                            } while (
                                !((n << 24) >> 24 == 0 ? 1 : (n << 24) >> 24 != (t << 24) >> 24)
                            );
                            e = t;
                        }
                        return ((255 & n) - (255 & e)) | 0;
                    }
                    function Se(e, r, n) {
                        (e |= 0), (r |= 0), (n |= 0);
                        var t = 0,
                            i = 0;
                        return (
                            (i = on),
                            (on = (on + 32) | 0),
                            (t = i),
                            (Kr[(e + 36) >> 2] = 1),
                            (0 == ((64 & Kr[e >> 2]) | 0)
                                ? ((Kr[t >> 2] = Kr[(e + 60) >> 2]),
                                  (Kr[(t + 4) >> 2] = 21523),
                                  (Kr[(t + 8) >> 2] = i + 16),
                                  0 | Sn(54, 0 | t))
                                : 0) && (Xr[(e + 75) >> 0] = -1),
                            (t = 0 | p(e, r, n)),
                            (on = i),
                            0 | t
                        );
                    }
                    function Ne(e) {
                        e |= 0;
                        var r = 0,
                            n = 0;
                        return (
                            (n = ((e + 15) & -16) | 0),
                            (r = 0 | Kr[tn >> 2]),
                            (e = (r + n) | 0),
                            (((0 | n) > 0) & ((0 | e) < (0 | r))) | ((0 | e) < 0)
                                ? (dn(), On(12), -1)
                                : ((Kr[tn >> 2] = e),
                                  ((0 | e) > (0 | Rn())
                                    ? 0 == (0 | An())
                                    : 0)
                                      ? ((Kr[tn >> 2] = r), On(12), -1)
                                      : 0 | r)
                        );
                    }
                    function Ie(e, r, n, t) {
                        (e |= 0), (r |= 0), (n |= 0), (t |= 0);
                        var i = 0,
                            _ = 0;
                        return (
                            (i = 0 | cn(n, r)),
                            (n = 0 == (0 | r) ? 0 : n),
                            (0 | Kr[(t + 76) >> 2]) > -1
                                ? ((_ = 0 == (0 | kr(t))), (e = 0 | K(e, i, t)), _ || Br(t))
                                : (e = 0 | K(e, i, t)),
                            (0 | e) != (0 | i) && (n = ((e >>> 0) / (r >>> 0)) | 0),
                            0 | n
                        );
                    }
                    function Oe(e, r, n, t, i, _) {
                        (e |= 0),
                            (r |= 0),
                            (n |= 0),
                            (t |= 0),
                            (i |= 0),
                            (_ |= 0),
                            0 | ur(e, 0 | Kr[(r + 8) >> 2], _) && re(0, r, n, t, i);
                    }
                    function Ce(e, r, n, t) {
                        (e |= 0),
                            (r |= 0),
                            (n |= 0),
                            (t |= 0),
                            0 | ur(e, 0 | Kr[(r + 8) >> 2], 0) && Te(0, r, n, t);
                    }
                    function he(e) {
                        e |= 0;
                        var r = 0,
                            n = 0,
                            t = 0;
                        if (((n = 0 | Kr[e >> 2]), (t = ((0 | Xr[n >> 0]) - 48) | 0) >>> 0 < 10)) {
                            r = 0;
                            do {
                                (r = (t + ((10 * r) | 0)) | 0),
                                    (n = (n + 1) | 0),
                                    (Kr[e >> 2] = n),
                                    (t = ((0 | Xr[n >> 0]) - 48) | 0);
                            } while (t >>> 0 < 10);
                        } else r = 0;
                        return 0 | r;
                    }
                    function Pe(e, r, n, t) {
                        if (
                            ((e |= 0),
                            (r |= 0),
                            (n |= 0),
                            (t |= 0),
                            !((0 == (0 | e)) & (0 == (0 | r))))
                        )
                            do {
                                (n = (n + -1) | 0),
                                    (Xr[n >> 0] = 0 | Zr[(2122 + (15 & e)) >> 0] | t),
                                    (e = 0 | xe(0 | e, 0 | r, 4)),
                                    (r = Tn);
                            } while (!((0 == (0 | e)) & (0 == (0 | r))));
                        return 0 | n;
                    }
                    function Le(e, r, n) {
                        (e |= 0), (r |= 0), (n |= 0);
                        var t = 0,
                            i = 0;
                        return (
                            (i = on),
                            (on = (on + 16) | 0),
                            (t = i),
                            (Kr[t >> 2] = Kr[n >> 2]),
                            (e = 0 | Un[7 & Kr[(16 + (0 | Kr[e >> 2])) >> 2]](e, r, t)),
                            e && (Kr[n >> 2] = Kr[t >> 2]),
                            (on = i),
                            (1 & e) | 0
                        );
                    }
                    function be(e) {
                        e |= 0;
                        var r = 0;
                        return (0 | (r = 0 | Xr[(un + (255 & e)) >> 0])) < 8
                            ? 0 | r
                            : (0 | (r = 0 | Xr[(un + ((e >> 8) & 255)) >> 0])) < 8
                            ? (r + 8) | 0
                            : ((r = 0 | Xr[(un + ((e >> 16) & 255)) >> 0]),
                              (0 | r) < 8
                                  ? (r + 16) | 0
                                  : (24 + (0 | Xr[(un + (e >>> 24)) >> 0])) | 0);
                    }
                    function Fe(e, r, n, t) {
                        (e |= 0), (r |= 0), (n |= 0), (t |= 0);
                        var i = 0;
                        ((0 | Kr[(r + 4) >> 2]) == (0 | n)
                            ? ((i = (r + 28) | 0), 1 != (0 | Kr[i >> 2]))
                            : 0) && (Kr[i >> 2] = t);
                    }
                    function Ue(e, r, n) {
                        if (((e |= 0), (r |= 0), (n |= 0), !((0 == (0 | e)) & (0 == (0 | r)))))
                            do {
                                (n = (n + -1) | 0),
                                    (Xr[n >> 0] = (7 & e) | 48),
                                    (e = 0 | xe(0 | e, 0 | r, 3)),
                                    (r = Tn);
                            } while (!((0 == (0 | e)) & (0 == (0 | r))));
                        return 0 | n;
                    }
                    function me(e, r, n) {
                        (e |= 0), (r |= 0), (n |= 0);
                        var t = 0,
                            i = 0;
                        return (
                            (t = (e + 20) | 0),
                            (i = 0 | Kr[t >> 2]),
                            (e = ((0 | Kr[(e + 16) >> 2]) - i) | 0),
                            (e = e >>> 0 > n >>> 0 ? n : e),
                            m(0 | i, 0 | r, 0 | e),
                            (Kr[t >> 2] = (0 | Kr[t >> 2]) + e),
                            0 | n
                        );
                    }
                    function De(e, r, n, t) {
                        (e |= 0), (r |= 0), (n |= 0), (t |= 0);
                        var i = 0,
                            _ = 0;
                        return (
                            (_ = on),
                            (on = (on + 16) | 0),
                            (i = 0 | _),
                            d(e, r, n, t, i),
                            (on = _),
                            0 | ((Tn = 0 | Kr[(i + 4) >> 2]), 0 | Kr[i >> 2])
                        );
                    }
                    function pe(e, r) {
                        (e |= 0), (r |= 0);
                        var n = 0,
                            t = 0;
                        return (
                            (t = on),
                            (on = (on + 48) | 0),
                            (n = t),
                            (Kr[n >> 2] = 40),
                            G(e, r, n),
                            (on = t),
                            0 | Kr[(n + 32) >> 2]
                        );
                    }
                    function ve(e, r) {
                        (e |= 0), (r |= 0);
                        var n = 0,
                            t = 0;
                        return (
                            (t = on),
                            (on = (on + 48) | 0),
                            (n = t),
                            (Kr[n >> 2] = 40),
                            G(e, r, n),
                            (on = t),
                            0 | Kr[(n + 12) >> 2]
                        );
                    }
                    function Be(e, r) {
                        (e |= 0), (r |= 0);
                        var n = 0,
                            t = 0;
                        return (
                            (t = on),
                            (on = (on + 48) | 0),
                            (n = t),
                            (Kr[n >> 2] = 40),
                            G(e, r, n),
                            (on = t),
                            0 | Kr[(n + 8) >> 2]
                        );
                    }
                    function ke(e, r) {
                        (e |= 0), (r |= 0);
                        var n = 0,
                            t = 0;
                        return (
                            (t = on),
                            (on = (on + 48) | 0),
                            (n = t),
                            (Kr[n >> 2] = 40),
                            G(e, r, n),
                            (on = t),
                            0 | Kr[(n + 4) >> 2]
                        );
                    }
                    function ye() {
                        var e = 0,
                            r = 0;
                        return (
                            (e = on),
                            (on = (on + 16) | 0),
                            0 | hn(5136, 2)
                                ? (Ke(4307, e), 0)
                                : ((r = 0 | Mn(0 | Kr[1285])), (on = e), 0 | r)
                        );
                    }
                    function ge(e) {
                        e |= 0;
                        var r = 0,
                            n = 0;
                        return (
                            (r = on),
                            (on = (on + 16) | 0),
                            (n = r),
                            (e = 0 | Dr(0 | Kr[(e + 60) >> 2])),
                            (Kr[n >> 2] = e),
                            (e = 0 | $e(0 | In(6, 0 | n))),
                            (on = r),
                            0 | e
                        );
                    }
                    function we(e) {
                        e |= 0;
                        var r = 0;
                        if (((r = on), (on = (on + 16) | 0), T(e), !(0 | Nn(0 | Kr[1285], 0))))
                            return void (on = r);
                        Ke(4406, r);
                    }
                    function Ge(e) {
                        e |= 0;
                        var r = 0;
                        return e
                            ? ((r = 0 | Kr[(e + -4) >> 2]),
                              (e = 3 & r),
                              0 | (1 == (0 | e) ? 0 : ((-8 & r) - (0 == (0 | e) ? 8 : 4)) | 0))
                            : 0;
                    }
                    function He(e, r, n) {
                        (e |= 0), (r |= 0), (n |= 0);
                        var t = 0,
                            i = 0;
                        return (
                            (t = on),
                            (on = (on + 16) | 0),
                            (i = t),
                            (Kr[i >> 2] = n),
                            (n = 0 | sr(e, r, i)),
                            (on = t),
                            0 | n
                        );
                    }
                    function Xe(e, r, n, t, i, _, o) {
                        (e |= 0),
                            (r |= 0),
                            (n |= 0),
                            (t |= 0),
                            (i |= 0),
                            (_ |= 0),
                            (o |= 0),
                            kn[3 & e](0 | r, 0 | n, 0 | t, 0 | i, 0 | _, 0 | o);
                    }
                    function Ve() {
                        var e = 0;
                        if (((e = on), (on = (on + 16) | 0), !(0 | Ln(5140, 6))))
                            return void (on = e);
                        Ke(4356, e);
                    }
                    function Ye(e, r, n) {
                        return (
                            (e |= 0),
                            (r |= 0),
                            (0 | (n |= 0)) < 32
                                ? ((Tn =
                                      (r << n) | ((e & (((1 << n) - 1) << (32 - n))) >>> (32 - n))),
                                  e << n)
                                : ((Tn = e << (n - 32)), 0)
                        );
                    }
                    function xe(e, r, n) {
                        return (
                            (e |= 0),
                            (r |= 0),
                            (0 | (n |= 0)) < 32
                                ? ((Tn = r >>> n), (e >>> n) | ((r & ((1 << n) - 1)) << (32 - n)))
                                : ((Tn = 0), (r >>> (n - 32)) | 0)
                        );
                    }
                    function Ke(e, r) {
                        (e |= 0), (r |= 0);
                        var n = 0;
                        (n = on),
                            (on = (on + 16) | 0),
                            (Kr[n >> 2] = r),
                            (r = 0 | Kr[26]),
                            B(r, e, n),
                            ie(10, r),
                            Cn();
                    }
                    function We() {}
                    function Ze(e, r, n, t) {
                        return (
                            (e |= 0),
                            (r |= 0),
                            (n |= 0),
                            (t |= 0),
                            (t = (r - t - ((n >>> 0 > e >>> 0) | 0)) >>> 0),
                            0 | ((Tn = t), ((e - n) >>> 0) | 0)
                        );
                    }
                    function ze(e, r) {
                        return (
                            (e |= 0),
                            (r |= 0),
                            (r = r ? 0 | g(0 | Kr[r >> 2], 0 | Kr[(r + 4) >> 2], e) : 0),
                            0 | (0 | r ? r : e)
                        );
                    }
                    function je(e, r, n, t, i, _) {
                        (e |= 0),
                            (r |= 0),
                            (n |= 0),
                            (t |= 0),
                            (i |= 0),
                            (_ |= 0),
                            mn[3 & e](0 | r, 0 | n, 0 | t, 0 | i, 0 | _);
                    }
                    function Je(e) {
                        e = +e;
                        var r = 0;
                        return (
                            (rn[_n >> 3] = e),
                            (r = 0 | Kr[_n >> 2]),
                            (Tn = 0 | Kr[(_n + 4) >> 2]),
                            0 | r
                        );
                    }
                    function Qe(e, r, n, t) {
                        return (
                            (e |= 0),
                            (r |= 0),
                            (n |= 0),
                            (t |= 0),
                            (n = (e + n) >>> 0),
                            0 | ((Tn = (r + t + ((n >>> 0 < e >>> 0) | 0)) >>> 0), 0 | n)
                        );
                    }
                    function qe(e, r, n, t, i) {
                        (e |= 0),
                            (r |= 0),
                            (n |= 0),
                            (t |= 0),
                            (i |= 0),
                            yn[3 & e](0 | r, 0 | n, 0 | t, 0 | i);
                    }
                    function $e(e) {
                        e |= 0;
                        var r = 0;
                        return (
                            e >>> 0 > 4294963200 &&
                                ((r = 0 | Pr()), (Kr[r >> 2] = 0 - e), (e = -1)),
                            0 | e
                        );
                    }
                    function er(e) {
                        return (e |= 0), (1 & (e = e ? 0 != (0 | k(e, 32, 88, 0)) : 0)) | 0;
                    }
                    function rr(e, r, n, t) {
                        return (
                            (e |= 0),
                            (r |= 0),
                            (n |= 0),
                            (t |= 0),
                            0 | Un[7 & e](0 | r, 0 | n, 0 | t)
                        );
                    }
                    function nr(e, r) {
                        (e |= 0), (r |= 0);
                        var n = 0;
                        return (
                            (n = 0 | oe(e)), ((((0 | Ie(e, 1, n, r)) != (0 | n)) << 31) >> 31) | 0
                        );
                    }
                    function tr(e, r, n) {
                        (e |= 0), (r |= 0), (n |= 0), 32 & Kr[e >> 2] || K(r, n, e);
                    }
                    function ir(e, r, n, t) {
                        (e |= 0), (r |= 0), (n |= 0), (t |= 0), vn[0 & e](0 | r, 0 | n, 0 | t);
                    }
                    function _r(e) {
                        e |= 0;
                        var r = 0;
                        return (r = on), (on = (on + e) | 0), (on = (on + 15) & -16), 0 | r;
                    }
                    function or(e) {
                        e |= 0;
                        var r = 0;
                        return (r = (188 + (0 | br())) | 0), 0 | ue(e, 0 | Kr[r >> 2]);
                    }
                    function ar(e, r) {
                        return (e |= 0), (r |= 0), 0 | (e = e ? 0 | W(e, r, 0) : 0);
                    }
                    function ur(e, r, n) {
                        return (e |= 0), (r |= 0), (n |= 0), ((0 | e) == (0 | r)) | 0;
                    }
                    function Er(e, r) {
                        (e |= 0), (r |= 0);
                        var n = 0;
                        return (n = 0 | Tr(0 | e)), 0 | (0 == (0 | r) ? e : n);
                    }
                    function fr(e, r, n, t) {
                        return (e |= 0), (r |= 0), (n |= 0), (t |= 0), 0 | d(e, r, n, t, 0);
                    }
                    function Tr(e) {
                        return (
                            ((255 & (e |= 0)) << 24) |
                            (((e >> 8) & 255) << 16) |
                            (((e >> 16) & 255) << 8) |
                            (e >>> 24) |
                            0
                        );
                    }
                    function cr(e, r, n, t, i, _) {
                        (e |= 0), (r |= 0), (n |= 0), (t |= 0), (i |= 0), (_ |= 0), sn(6);
                    }
                    function lr(e, r) {
                        (e |= 0), (r |= 0), En || ((En = e), (fn = r));
                    }
                    function sr(e, r, n) {
                        return (e |= 0), (r |= 0), (n |= 0), 0 | Q(e, 2147483647, r, n);
                    }
                    function Ar(e, r, n, t, i) {
                        (e |= 0), (r |= 0), (n |= 0), (t |= 0), (i |= 0), sn(1);
                    }
                    function Rr(e) {
                        (e |= 0), Br(e), Ur(e);
                    }
                    function dr(e, r) {
                        return (e |= 0), (r |= 0), 0 | pn[1 & e](0 | r);
                    }
                    function Mr(e, r) {
                        (e |= 0), (r |= 0), (on = e), (an = r);
                    }
                    function Sr(e, r, n, t) {
                        (e |= 0), (r |= 0), (n |= 0), (t |= 0), sn(7);
                    }
                    function Nr(e, r) {
                        return (e |= 0), (r |= 0), 0 | ze(e, r);
                    }
                    function Ir(e, r) {
                        (e |= 0), (r |= 0), Dn[7 & e](0 | r);
                    }
                    function Or(e, r, n) {
                        return (e |= 0), (r |= 0), (n |= 0), sn(0), 0;
                    }
                    function Cr(e, r) {
                        return (e = +e), (r |= 0), +(+ae(e, r));
                    }
                    function hr(e, r, n) {
                        (e |= 0), (r |= 0), (n |= 0), sn(4);
                    }
                    function Pr() {
                        return (64 + (0 | br())) | 0;
                    }
                    function Lr(e) {
                        (e |= 0), Bn[3 & e]();
                    }
                    function br() {
                        return 232;
                    }
                    function Fr(e) {
                        (e |= 0), (on = e);
                    }
                    function Ur(e) {
                        (e |= 0), T(e);
                    }
                    function mr(e) {
                        (e |= 0), (Tn = e);
                    }
                    function Dr(e) {
                        return 0 | (e |= 0);
                    }
                    function pr() {
                        return 5072;
                    }
                    function vr(e) {
                        return (e |= 0), sn(3), 0;
                    }
                    function Br(e) {
                        e |= 0;
                    }
                    function kr(e) {
                        return (e |= 0), 0;
                    }
                    function yr() {
                        return 0 | Tn;
                    }
                    function gr() {
                        return 0 | on;
                    }
                    function wr(e) {
                        (e |= 0), sn(2);
                    }
                    function Gr() {
                        sn(5);
                    }
                    var Hr = e.Int8Array,
                        Xr = new Hr(n),
                        Vr = e.Int16Array,
                        Yr = new Vr(n),
                        xr = e.Int32Array,
                        Kr = new xr(n),
                        Wr = e.Uint8Array,
                        Zr = new Wr(n),
                        zr = e.Uint16Array,
                        jr = new zr(n),
                        Jr = e.Uint32Array,
                        Qr = new Jr(n),
                        qr = e.Float32Array,
                        $r = new qr(n),
                        en = e.Float64Array,
                        rn = new en(n),
                        nn = e.byteLength,
                        tn = 0 | r.DYNAMICTOP_PTR,
                        _n = 0 | r.tempDoublePtr,
                        on = (r.ABORT, 0 | r.STACKTOP),
                        an = 0 | r.STACK_MAX,
                        un = 0 | r.cttz_i8,
                        En = 0,
                        fn = 0,
                        Tn = (e.NaN, e.Infinity, 0),
                        cn = (e.Math.floor,
                        e.Math.abs,
                        e.Math.sqrt,
                        e.Math.pow,
                        e.Math.cos,
                        e.Math.sin,
                        e.Math.tan,
                        e.Math.acos,
                        e.Math.asin,
                        e.Math.atan,
                        e.Math.atan2,
                        e.Math.exp,
                        e.Math.log,
                        e.Math.ceil,
                        e.Math.imul),
                        ln = (e.Math.min, e.Math.max, e.Math.clz32),
                        sn = r.abort,
                        An = (r.assert, r.enlargeMemory),
                        Rn = r.getTotalMemory,
                        dn = r.abortOnCannotGrowMemory,
                        Mn = (r.invoke_iiii,
                        r.invoke_viiiii,
                        r.invoke_vi,
                        r.invoke_ii,
                        r.invoke_viii,
                        r.invoke_v,
                        r.invoke_viiiiii,
                        r.invoke_viiii,
                        r._pthread_getspecific),
                        Sn = r.___syscall54,
                        Nn = r._pthread_setspecific,
                        In = (r.___gxx_personality_v0, r.___syscall6),
                        On = r.___setErrNo,
                        Cn = r._abort,
                        hn = (r.___cxa_begin_catch, r._pthread_once),
                        Pn = r._emscripten_memcpy_big,
                        Ln = r._pthread_key_create,
                        bn = r.___syscall140,
                        Fn = (r.___resumeException, r.___cxa_find_matching_catch, r.___syscall146),
                        Un = (r.__ZSt18uncaught_exceptionv, [Or, p, Re, Se, me, ne, Or, Or]),
                        mn = [Ar, $, v, Ar],
                        Dn = [wr, Br, Rr, Br, Br, Rr, we, wr],
                        pn = [vr, ge],
                        vn = [hr],
                        Bn = [Gr, Z, Ve, Gr],
                        kn = [cr, Oe, le, cr],
                        yn = [Sr, Ce, Ae, Sr];
                    return {
                        stackSave: gr,
                        _i64Subtract: Ze,
                        _crn_get_bytes_per_block: F,
                        setThrew: lr,
                        dynCall_viii: ir,
                        _bitshift64Lshr: xe,
                        _bitshift64Shl: Ye,
                        dynCall_viiii: qe,
                        setTempRet0: mr,
                        _crn_decompress: S,
                        _memset: ee,
                        _sbrk: Ne,
                        _memcpy: m,
                        stackAlloc: _r,
                        _crn_get_height: Be,
                        dynCall_vi: Ir,
                        getTempRet0: yr,
                        _crn_get_levels: ve,
                        _crn_get_uncompressed_size: b,
                        _i64Add: Qe,
                        dynCall_iiii: rr,
                        _emscripten_get_global_libc: pr,
                        dynCall_ii: dr,
                        ___udivdi3: fr,
                        _llvm_bswap_i32: Tr,
                        dynCall_viiiii: je,
                        ___cxa_can_catch: Le,
                        _free: T,
                        runPostSets: We,
                        dynCall_viiiiii: Xe,
                        establishStackSpace: Mr,
                        ___uremdi3: De,
                        ___cxa_is_pointer_type: er,
                        stackRestore: Fr,
                        _malloc: i,
                        _emscripten_replace_memory: t,
                        dynCall_v: Lr,
                        _crn_get_width: ke,
                        _crn_get_dxt_format: pe
                    };
                })(Module.asmGlobalArg, Module.asmLibraryArg, buffer),
                stackSave = (Module.stackSave = asm.stackSave),
                getTempRet0 = (Module.getTempRet0 = asm.getTempRet0),
                _memset = (Module._memset = asm._memset),
                setThrew = (Module.setThrew = asm.setThrew),
                _bitshift64Lshr = (Module._bitshift64Lshr = asm._bitshift64Lshr),
                _bitshift64Shl = (Module._bitshift64Shl = asm._bitshift64Shl),
                setTempRet0 = (Module.setTempRet0 = asm.setTempRet0),
                _crn_decompress = (Module._crn_decompress = asm._crn_decompress),
                _crn_get_bytes_per_block = (Module._crn_get_bytes_per_block =
                    asm._crn_get_bytes_per_block),
                _sbrk = (Module._sbrk = asm._sbrk),
                _memcpy = (Module._memcpy = asm._memcpy),
                stackAlloc = (Module.stackAlloc = asm.stackAlloc),
                _crn_get_height = (Module._crn_get_height = asm._crn_get_height),
                _i64Subtract = (Module._i64Subtract = asm._i64Subtract),
                _crn_get_levels = (Module._crn_get_levels = asm._crn_get_levels),
                _crn_get_uncompressed_size = (Module._crn_get_uncompressed_size =
                    asm._crn_get_uncompressed_size),
                _i64Add = (Module._i64Add = asm._i64Add),
                _emscripten_get_global_libc = (Module._emscripten_get_global_libc =
                    asm._emscripten_get_global_libc),
                ___udivdi3 = (Module.___udivdi3 = asm.___udivdi3),
                _llvm_bswap_i32 = (Module._llvm_bswap_i32 = asm._llvm_bswap_i32),
                ___cxa_can_catch = (Module.___cxa_can_catch = asm.___cxa_can_catch),
                _free = (Module._free = asm._free),
                runPostSets = (Module.runPostSets = asm.runPostSets),
                establishStackSpace = (Module.establishStackSpace = asm.establishStackSpace),
                ___uremdi3 = (Module.___uremdi3 = asm.___uremdi3),
                ___cxa_is_pointer_type = (Module.___cxa_is_pointer_type =
                    asm.___cxa_is_pointer_type),
                stackRestore = (Module.stackRestore = asm.stackRestore),
                _malloc = (Module._malloc = asm._malloc),
                _emscripten_replace_memory = (Module._emscripten_replace_memory =
                    asm._emscripten_replace_memory),
                _crn_get_width = (Module._crn_get_width = asm._crn_get_width),
                _crn_get_dxt_format = (Module._crn_get_dxt_format = asm._crn_get_dxt_format),
                dynCall_iiii = (Module.dynCall_iiii = asm.dynCall_iiii),
                dynCall_viiiii = (Module.dynCall_viiiii = asm.dynCall_viiiii),
                dynCall_vi = (Module.dynCall_vi = asm.dynCall_vi),
                dynCall_ii = (Module.dynCall_ii = asm.dynCall_ii),
                dynCall_viii = (Module.dynCall_viii = asm.dynCall_viii),
                dynCall_v = (Module.dynCall_v = asm.dynCall_v),
                dynCall_viiiiii = (Module.dynCall_viiiiii = asm.dynCall_viiiiii),
                dynCall_viiii = (Module.dynCall_viiii = asm.dynCall_viiii);
            (Runtime.stackAlloc = Module.stackAlloc),
                (Runtime.stackSave = Module.stackSave),
                (Runtime.stackRestore = Module.stackRestore),
                (Runtime.establishStackSpace = Module.establishStackSpace),
                (Runtime.setTempRet0 = Module.setTempRet0),
                (Runtime.getTempRet0 = Module.getTempRet0),
                (Module.asm = asm),
                (ExitStatus.prototype = new Error()),
                (ExitStatus.prototype.constructor = ExitStatus);
            var initialStackTop,
                preloadStartTime = null,
                calledMain = !1;
            (dependenciesFulfilled = function e() {
                Module.calledRun || run(), Module.calledRun || (dependenciesFulfilled = e);
            }),
                (Module.callMain = Module.callMain = function(e) {
                    function r() {
                        for (var e = 0; e < 3; e++) t.push(0);
                    }
                    (e = e || []), ensureInitRuntime();
                    var n = e.length + 1,
                        t = [allocate(intArrayFromString(Module.thisProgram), "i8", ALLOC_NORMAL)];
                    r();
                    for (var i = 0; i < n - 1; i += 1)
                        t.push(allocate(intArrayFromString(e[i]), "i8", ALLOC_NORMAL)), r();
                    t.push(0), (t = allocate(t, "i32", ALLOC_NORMAL));
                    try {
                        exit(Module._main(n, t, 0), !0);
                    } catch (e) {
                        if (e instanceof ExitStatus) return;
                        if ("SimulateInfiniteLoop" == e) return void (Module.noExitRuntime = !0);
                        var _ = e;
                        e && "object" == typeof e && e.stack && (_ = [e, e.stack]),
                            Module.printErr("exception thrown: " + _),
                            Module.quit(1, e);
                    } finally {
                        calledMain = !0;
                    }
                }),
                (Module.run = Module.run = run),
                (Module.exit = Module.exit = exit);
            var abortDecorators = [];
            if (((Module.abort = Module.abort = abort), Module.preInit))
                for (
                    "function" == typeof Module.preInit && (Module.preInit = [Module.preInit]);
                    Module.preInit.length > 0;

                )
                    Module.preInit.pop()();
            var shouldRunNow = !0;
            return (
                Module.noInitialRun && (shouldRunNow = !1),
                (Module.noExitRuntime = !0),
                run(),
                Module
            );
        }),
        (function(e) {
            "use strict";
            e("ThirdParty/when", [], function() {
                function e(e, n, t, i) {
                    return r(e).then(n, t, i);
                }
                function r(e) {
                    var r, n;
                    return (
                        e instanceof t
                            ? (r = e)
                            : a(e)
                            ? ((n = o()),
                              e.then(
                                  function(e) {
                                      n.resolve(e);
                                  },
                                  function(e) {
                                      n.reject(e);
                                  },
                                  function(e) {
                                      n.progress(e);
                                  }
                              ),
                              (r = n.promise))
                            : (r = i(e)),
                        r
                    );
                }
                function n(r) {
                    return e(r, _);
                }
                function t(e) {
                    this.then = e;
                }
                function i(e) {
                    return new t(function(n) {
                        try {
                            return r(n ? n(e) : e);
                        } catch (e) {
                            return _(e);
                        }
                    });
                }
                function _(e) {
                    return new t(function(n, t) {
                        try {
                            return t ? r(t(e)) : _(e);
                        } catch (e) {
                            return _(e);
                        }
                    });
                }
                function o() {
                    function e(e, r, n) {
                        return c(e, r, n);
                    }
                    function n(e) {
                        return s(e);
                    }
                    function i(e) {
                        return s(_(e));
                    }
                    function a(e) {
                        return l(e);
                    }
                    var u, E, f, T, c, l, s;
                    return (
                        (E = new t(e)),
                        (u = {
                            then: e,
                            resolve: n,
                            reject: i,
                            progress: a,
                            promise: E,
                            resolver: { resolve: n, reject: i, progress: a }
                        }),
                        (f = []),
                        (T = []),
                        (c = function(e, r, n) {
                            var t, i;
                            return (
                                (t = o()),
                                (i =
                                    "function" == typeof n
                                        ? function(e) {
                                              try {
                                                  t.progress(n(e));
                                              } catch (e) {
                                                  t.progress(e);
                                              }
                                          }
                                        : function(e) {
                                              t.progress(e);
                                          }),
                                f.push(function(n) {
                                    n.then(e, r).then(t.resolve, t.reject, i);
                                }),
                                T.push(i),
                                t.promise
                            );
                        }),
                        (l = function(e) {
                            return A(T, e), e;
                        }),
                        (s = function(e) {
                            return (
                                (e = r(e)), (c = e.then), (s = r), (l = d), A(f, e), (T = f = I), e
                            );
                        }),
                        u
                    );
                }
                function a(e) {
                    return e && "function" == typeof e.then;
                }
                function u(r, n, t, i, _) {
                    return (
                        R(2, arguments),
                        e(r, function(r) {
                            function a(e) {
                                A(e);
                            }
                            function u(e) {
                                s(e);
                            }
                            var E, f, T, c, l, s, A, R, M, S;
                            if (
                                ((M = r.length >>> 0),
                                (E = Math.max(0, Math.min(n, M))),
                                (T = []),
                                (f = M - E + 1),
                                (c = []),
                                (l = o()),
                                E)
                            )
                                for (
                                    R = l.progress,
                                        A = function(e) {
                                            c.push(e), --f || ((s = A = d), l.reject(c));
                                        },
                                        s = function(e) {
                                            T.push(e), --E || ((s = A = d), l.resolve(T));
                                        },
                                        S = 0;
                                    S < M;
                                    ++S
                                )
                                    S in r && e(r[S], u, a, R);
                            else l.resolve(T);
                            return l.then(t, i, _);
                        })
                    );
                }
                function E(e, r, n, t) {
                    function i(e) {
                        return r ? r(e[0]) : e[0];
                    }
                    return u(e, 1, i, n, t);
                }
                function f(e, r, n, t) {
                    return R(1, arguments), c(e, M).then(r, n, t);
                }
                function T() {
                    return c(arguments, M);
                }
                function c(r, n) {
                    return e(r, function(r) {
                        var t, i, _, a, u, E;
                        if (((_ = i = r.length >>> 0), (t = []), (E = o()), _))
                            for (
                                a = function(r, i) {
                                    e(r, n).then(function(e) {
                                        (t[i] = e), --_ || E.resolve(t);
                                    }, E.reject);
                                },
                                    u = 0;
                                u < i;
                                u++
                            )
                                u in r ? a(r[u], u) : --_;
                        else E.resolve(t);
                        return E.promise;
                    });
                }
                function l(r, n) {
                    var t = N.call(arguments, 1);
                    return e(r, function(r) {
                        var i;
                        return (
                            (i = r.length),
                            (t[0] = function(r, t, _) {
                                return e(r, function(r) {
                                    return e(t, function(e) {
                                        return n(r, e, _, i);
                                    });
                                });
                            }),
                            S.apply(r, t)
                        );
                    });
                }
                function s(r, n, t) {
                    var i = arguments.length > 2;
                    return e(
                        r,
                        function(e) {
                            return (e = i ? t : e), n.resolve(e), e;
                        },
                        function(e) {
                            return n.reject(e), _(e);
                        },
                        n.progress
                    );
                }
                function A(e, r) {
                    for (var n, t = 0; (n = e[t++]); ) n(r);
                }
                function R(e, r) {
                    for (var n, t = r.length; t > e; )
                        if (null != (n = r[--t]) && "function" != typeof n)
                            throw new Error("arg " + t + " must be a function");
                }
                function d() {}
                function M(e) {
                    return e;
                }
                var S, N, I;
                return (
                    (e.defer = o),
                    (e.resolve = r),
                    (e.reject = n),
                    (e.join = T),
                    (e.all = f),
                    (e.map = c),
                    (e.reduce = l),
                    (e.any = E),
                    (e.some = u),
                    (e.chain = s),
                    (e.isPromise = a),
                    (t.prototype = {
                        always: function(e, r) {
                            return this.then(e, e, r);
                        },
                        otherwise: function(e) {
                            return this.then(I, e);
                        },
                        yield: function(e) {
                            return this.then(function() {
                                return e;
                            });
                        },
                        spread: function(e) {
                            return this.then(function(r) {
                                return f(r, function(r) {
                                    return e.apply(I, r);
                                });
                            });
                        }
                    }),
                    (N = [].slice),
                    (S =
                        [].reduce ||
                        function(e) {
                            var r, n, t, i, _;
                            if (
                                ((_ = 0),
                                (r = Object(this)),
                                (i = r.length >>> 0),
                                (n = arguments),
                                n.length <= 1)
                            )
                                for (;;) {
                                    if (_ in r) {
                                        t = r[_++];
                                        break;
                                    }
                                    if (++_ >= i) throw new TypeError();
                                }
                            else t = n[1];
                            for (; _ < i; ++_) _ in r && (t = e(t, r[_], _, r));
                            return t;
                        }),
                    e
                );
            });
        })(
            "function" == typeof define && define.amd
                ? define
                : function(e) {
                      "object" == typeof exports ? (module.exports = e()) : (this.when = e());
                  }
        ),
        define("Core/defaultValue", ["./freezeObject"], function(e) {
            "use strict";
            function r(e, r) {
                return void 0 !== e && null !== e ? e : r;
            }
            return (r.EMPTY_OBJECT = e({})), r;
        }),
        define("Core/formatError", ["./defined"], function(e) {
            "use strict";
            function r(r) {
                var n,
                    t = r.name,
                    i = r.message;
                n = e(t) && e(i) ? t + ": " + i : r.toString();
                var _ = r.stack;
                return e(_) && (n += "\n" + _), n;
            }
            return r;
        }),
        define("Workers/createTaskProcessorWorker", [
            "../ThirdParty/when",
            "../Core/defaultValue",
            "../Core/defined",
            "../Core/formatError"
        ], function(e, r, n, t) {
            "use strict";
            function i(r, n, t) {
                try {
                    return r(n, t);
                } catch (r) {
                    return e.reject(r);
                }
            }
            function _(_) {
                var o;
                return function(a) {
                    var u = a.data,
                        E = [],
                        f = { id: u.id, result: void 0, error: void 0 };
                    return e(i(_, u.parameters, E))
                        .then(function(e) {
                            f.result = e;
                        })
                        .otherwise(function(e) {
                            e instanceof Error
                                ? (f.error = { name: e.name, message: e.message, stack: e.stack })
                                : (f.error = e);
                        })
                        .always(function() {
                            n(o) || (o = r(self.webkitPostMessage, self.postMessage)),
                                u.canTransferArrayBuffer || (E.length = 0);
                            try {
                                o(f, E);
                            } catch (e) {
                                (f.result = void 0),
                                    (f.error =
                                        "postMessage failed with error: " +
                                        t(e) +
                                        "\n  with responseMessage: " +
                                        JSON.stringify(f)),
                                    o(f);
                            }
                        });
                };
            }
            return _;
        }),
        define("Workers/transcodeCRNToDXT", [
            "../Core/CompressedTextureBuffer",
            "../Core/defined",
            "../Core/PixelFormat",
            "../Core/RuntimeError",
            "../ThirdParty/crunch",
            "./createTaskProcessorWorker"
        ], function(e, r, n, t, i, _) {
            "use strict";
            function o(e, r, n, t) {
                var i,
                    _ = n / 4,
                    o = t % 4,
                    a = new Uint32Array(e.buffer, 0, (t - o) / 4),
                    u = new Uint32Array(r.buffer);
                for (i = 0; i < a.length; i++) u[_ + i] = a[i];
                for (i = t - o; i < t; i++) r[n + i] = e[i];
            }
            function a(_, a) {
                var u = _.byteLength,
                    l = new Uint8Array(_),
                    s = i._malloc(u);
                o(l, i.HEAPU8, s, u);
                var A = i._crn_get_dxt_format(s, u),
                    R = E[A];
                if (!r(R)) throw new t("Unsupported compressed format.");
                var d,
                    M = i._crn_get_levels(s, u),
                    S = i._crn_get_width(s, u),
                    N = i._crn_get_height(s, u),
                    I = 0;
                for (d = 0; d < M; ++d) I += n.compressedTextureSizeInBytes(R, S >> d, N >> d);
                c < I &&
                    (r(f) && i._free(f),
                    (f = i._malloc(I)),
                    (T = new Uint8Array(i.HEAPU8.buffer, f, I)),
                    (c = I)),
                    i._crn_decompress(s, u, f, I, 0, M),
                    i._free(s);
                var O = n.compressedTextureSizeInBytes(R, S, N),
                    C = T.subarray(0, O),
                    h = new Uint8Array(O);
                return h.set(C, 0), a.push(h.buffer), new e(R, S, N, h);
            }
            var u = { cCRNFmtInvalid: -1, cCRNFmtDXT1: 0, cCRNFmtDXT3: 1, cCRNFmtDXT5: 2 },
                E = {};
            (E[u.cCRNFmtDXT1] = n.RGB_DXT1),
                (E[u.cCRNFmtDXT3] = n.RGBA_DXT3),
                (E[u.cCRNFmtDXT5] = n.RGBA_DXT5);
            var f,
                T,
                c = 0;
            return _(a);
        });
})();
